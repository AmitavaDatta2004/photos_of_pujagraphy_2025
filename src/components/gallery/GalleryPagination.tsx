"use client"
import { useTheme } from "../../hooks/useTheme"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface GalleryPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const GalleryPagination = ({ currentPage, totalPages, onPageChange }: GalleryPaginationProps) => {
  const { theme } = useTheme()

  if (totalPages <= 1) return null

  return (
    <div className="mt-12">
      <Pagination>
        <PaginationContent className="flex flex-wrap justify-center gap-1">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              className={`${currentPage === 1 ? "pointer-events-none opacity-50" : ""} ${theme === "dark" ? "text-white hover:text-festival-golden" : ""} px-2 py-1 sm:px-4 sm:py-2`}
            />
          </PaginationItem>

          {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
            // Show limited page numbers on mobile
            let pageNumber
            if (totalPages <= 5) {
              pageNumber = index + 1
            } else {
              if (currentPage <= 3) {
                pageNumber = index + 1
                if (index === 4) pageNumber = totalPages
              } else if (currentPage >= totalPages - 2) {
                if (index === 0) pageNumber = 1
                else pageNumber = totalPages - (4 - index)
              } else {
                if (index === 0) pageNumber = 1
                else if (index === 4) pageNumber = totalPages
                else pageNumber = currentPage - 1 + (index - 1)
              }
            }

            return (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={currentPage === pageNumber}
                  onClick={() => onPageChange(pageNumber)}
                  className={`${theme === "dark" && currentPage !== pageNumber ? "text-white hover:text-festival-golden" : "text-white hover:text-festival-golden"} min-w-[32px] h-8 sm:min-w-[36px] sm:h-9`}
                >
                  {index === 1 && pageNumber !== 2 && totalPages > 5
                    ? "..."
                    : index === 3 && pageNumber !== totalPages - 1 && totalPages > 5
                      ? "..."
                      : pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : ""} ${theme === "dark" ? "text-white hover:text-festival-golden" : ""} px-2 py-1 sm:px-4 sm:py-2`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default GalleryPagination
