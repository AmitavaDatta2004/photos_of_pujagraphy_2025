"use client"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import AuthButton from "../AuthButton"
import type { User } from "@supabase/supabase-js"

interface GalleryHeaderProps {
  user: User | null
  loading: boolean
}

const GalleryHeader = ({ user, loading }: GalleryHeaderProps) => {
  const navigate = useNavigate()

  return (
    <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between">
      <Button
        variant="outline"
        className="text-festival-maroon border-festival-golden hover:bg-festival-golden/10 group dark:text-festival-golden dark:border-festival-golden/70 dark:hover:bg-festival-golden/20 w-full sm:w-auto"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Button>

      <div className="text-center order-first sm:order-none">
        <span className="text-sm text-festival-saffron font-medium dark:text-festival-saffron/80">Presented by</span>
        <h3 className="text-lg font-heading text-festival-maroon dark:text-festival-golden">Utsab Unites</h3>
      </div>

      {!loading && <AuthButton user={user} onAuthChange={() => {}} />}
    </div>
  )
}

export default GalleryHeader
