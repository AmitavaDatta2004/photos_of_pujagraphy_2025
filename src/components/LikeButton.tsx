
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface LikeButtonProps {
  photoId: string;
  user: User | null;
  onLike?: () => void;
  onUnlike?: () => void;
  className?: string;
}

const LikeButton = ({ photoId, user, onLike, onUnlike, className }: LikeButtonProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Check if user has liked this photo
  useEffect(() => {
    const checkUserLike = async () => {
      if (!user) {
        setLiked(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('photo_likes')
          .select('*')
          .eq('photo_id', photoId)
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error checking like status:', error);
          return;
        }

        setLiked(!!data);
      } catch (error) {
        console.error('Error checking like status:', error);
      }
    };

    checkUserLike();
  }, [photoId, user]);

  // Get like count
  useEffect(() => {
    const getLikeCount = async () => {
      try {
        const { count, error } = await supabase
          .from('photo_likes')
          .select('*', { count: 'exact', head: true })
          .eq('photo_id', photoId);

        if (error) {
          console.error('Error getting like count:', error);
          return;
        }

        setLikeCount(count || 0);
      } catch (error) {
        console.error('Error getting like count:', error);
      }
    };

    getLikeCount();

    // Set up realtime subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'photo_likes',
          filter: `photo_id=eq.${photoId}`,
        },
        () => {
          getLikeCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [photoId]);

  const toggleLike = async () => {
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please log in to like photos',
        variant: 'default',
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);
    try {
      if (liked) {
        // Unlike
        const { error } = await supabase
          .from('photo_likes')
          .delete()
          .eq('photo_id', photoId)
          .eq('user_id', user.id);

        if (error) throw error;
        
        setLiked(false);
        if (onUnlike) onUnlike();
      } else {
        // Like
        const { error } = await supabase.from('photo_likes').insert({
          photo_id: photoId,
          user_id: user.id,
        });

        if (error) throw error;
        
        setLiked(true);
        if (onLike) onLike();
      }
    } catch (error: any) {
      console.error('Error toggling like:', error);
      toast({
        title: 'Error',
        description: error.message || 'Something went wrong',
        variant: 'destructive',
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      <button
        onClick={toggleLike}
        disabled={isLoading}
        className={cn(
          "flex items-center gap-1 transition-all px-2 py-1 rounded-full",
          liked
            ? "text-rose-600 dark:text-rose-500"
            : "text-gray-500 dark:text-gray-400 hover:text-rose-500 dark:hover:text-rose-400",
          isLoading && "opacity-50 cursor-not-allowed"
        )}
        title={user ? (liked ? "Unlike" : "Like") : "Log in to like"}
      >
        <Heart
          size={16}
          className={cn(
            "transition-all",
            liked ? "fill-rose-600 dark:fill-rose-500" : "fill-transparent",
            liked && "scale-110"
          )}
        />
        <span className="text-sm font-medium">{likeCount}</span>
      </button>
    </div>
  );
};

export default LikeButton;
