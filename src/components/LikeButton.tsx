"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import type { User } from "@supabase/supabase-js"
import { supabase } from "@/integrations/supabase/client"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Loader2 } from "lucide-react"

interface LikeButtonProps {
  photoId: string
  user: User | null
  onLike?: () => void
  onUnlike?: () => void
  className?: string
}

interface LikerInfo {
  id: string
  username: string
  avatar_url?: string | null
}

const LikeButton = ({ photoId, user, onLike, onUnlike, className }: LikeButtonProps) => {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingLikers, setLoadingLikers] = useState(false)
  const [likers, setLikers] = useState<LikerInfo[]>([])
  const { toast } = useToast()

  // Check if user has liked this photo
  useEffect(() => {
    const checkUserLike = async () => {
      if (!user) {
        setLiked(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from("photo_likes")
          .select("*")
          .eq("photo_id", photoId)
          .eq("user_id", user.id)
          .single()

        if (error && error.code !== "PGRST116") {
          console.error("Error checking like status:", error)
          return
        }

        setLiked(!!data)
      } catch (error) {
        console.error("Error checking like status:", error)
      }
    }

    checkUserLike()
  }, [photoId, user])

  // Get like count and set up realtime subscription
  useEffect(() => {
    const getLikeCount = async () => {
      try {
        const { count, error } = await supabase
          .from("photo_likes")
          .select("*", { count: "exact", head: true })
          .eq("photo_id", photoId)

        if (error) {
          console.error("Error getting like count:", error)
          return
        }

        setLikeCount(count || 0)
      } catch (error) {
        console.error("Error getting like count:", error)
      }
    }

    getLikeCount()

    // Set up realtime subscription
    const channel = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "photo_likes",
          filter: `photo_id=eq.${photoId}`,
        },
        () => {
          getLikeCount()
          if (user) checkUserLike()
        },
      )
      .subscribe()

    const checkUserLike = async () => {
      if (!user) return

      try {
        const { data, error } = await supabase
          .from("photo_likes")
          .select("*")
          .eq("photo_id", photoId)
          .eq("user_id", user.id)
          .single()

        if (error && error.code !== "PGRST116") {
          return
        }

        setLiked(!!data)
      } catch (error) {
        console.error("Error checking like status:", error)
      }
    }

    return () => {
      supabase.removeChannel(channel)
    }
  }, [photoId, user])

  // Fetch users who liked this photo
  const fetchLikers = async () => {
    setLoadingLikers(true)
    try {
      const { data: likes, error: likesError } = await supabase
        .from("photo_likes")
        .select("user_id")
        .eq("photo_id", photoId)
        .limit(10)

      if (likesError) throw likesError

      if (likes && likes.length > 0) {
        const userIds = likes.map((like) => like.user_id)

        const { data: profiles, error: profilesError } = await supabase
          .from("profiles")
          .select("id, username, avatar_url")
          .in("id", userIds)

        if (profilesError) throw profilesError

        setLikers(profiles || [])
      } else {
        setLikers([])
      }
    } catch (error) {
      console.error("Error fetching likers:", error)
    } finally {
      setLoadingLikers(false)
    }
  }

  const toggleLike = async (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent triggering parent click events

    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to like photos",
        variant: "destructive",
        duration: 4000,
        className: "bg-opacity-800 backdrop-blur-0 bg-yellow-600", // Force opaque
        action: (
          <button
            onClick={() => window.location.href = "/auth"} // Redirect to login page
            className="focus:outline-none text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm"
          >
            Login
          </button>
        ),
      })
      return
    }

    setIsLoading(true)
    try {
      if (liked) {
        // Unlike
        const { error } = await supabase.from("photo_likes").delete().eq("photo_id", photoId).eq("user_id", user.id)

        if (error) throw error

        setLiked(false)
        setLikeCount((prev) => Math.max(0, prev - 1))
        if (onUnlike) onUnlike()
      } else {
        // Like
        const { error } = await supabase.from("photo_likes").insert({
          photo_id: photoId,
          user_id: user.id,
        })

        if (error) throw error

        setLiked(true)
        setLikeCount((prev) => prev + 1)
        if (onLike) onLike()
      }
    } catch (error: any) {
      console.error("Error toggling like:", error)
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
        duration: 3000,
        className: "bg-opacity-100 backdrop-blur-0", // Force opaque
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex items-center", className)} onClick={(e) => e.stopPropagation()}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={toggleLike}
              disabled={isLoading}
              className={cn(
                "flex items-center gap-1 transition-all duration-300 p-2 rounded-full",
                liked
                  ? "text-rose-600 dark:text-rose-500"
                  : "text-gray-500 dark:text-gray-400 hover:text-rose-500 dark:hover:text-rose-400",
                isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-rose-50 dark:hover:bg-rose-900/20",
                "focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50",
              )}
              title={user ? (liked ? "Unlike" : "Like") : "Log in to like"}
            >
              {isLoading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Heart
                  size={18}
                  className={cn(
                    "transition-all duration-300",
                    liked ? "fill-rose-600 dark:fill-rose-500" : "fill-transparent",
                    liked && "scale-110 animate-heartbeat",
                  )}
                />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent className="bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-700 shadow-md">
            <p>{user ? (liked ? "Unlike" : "Like") : "Log in to like"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Popover>
        <PopoverTrigger asChild>
          <button
            className="text-sm font-medium hover:underline ml-1 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation()
              fetchLikers()
            }}
          >
            {likeCount > 0 ? likeCount : ""}
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-64 p-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
          align="center"
          onClick={(e) => e.stopPropagation()}
        >
          <h4 className="font-medium text-sm mb-2">
            {likeCount === 1 ? "1 person liked this" : `${likeCount} people liked this`}
          </h4>

          {loadingLikers ? (
            <div className="flex justify-center py-3">
              <Loader2 size={20} className="animate-spin text-gray-500" />
            </div>
          ) : likers.length > 0 ? (
            <div className="space-y-2 max-h-60 overflow-auto">
              {likers.map((liker) => (
                <div key={liker.id} className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                    {liker.avatar_url ? (
                      <img
                        src={liker.avatar_url || "/placeholder.svg"}
                        alt={liker.username}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-gray-500 bg-gray-100 dark:bg-gray-800">
                        {liker.username.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <span className="text-sm">{liker.username}</span>
                </div>
              ))}
              {likers.length < likeCount && (
                <p className="text-xs text-gray-500 text-center pt-1 border-t">
                  And {likeCount - likers.length} more...
                </p>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500 py-1">No likes yet.</p>
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default LikeButton
