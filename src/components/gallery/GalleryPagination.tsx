
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface GalleryPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const GalleryPagination = ({ currentPage, totalPages, onPageChange }: GalleryPaginationProps) => {
  const { theme } = useTheme();

  if (totalPages <= 1) return null;

  return (
    <div className="mt-12">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              className={`${currentPage === 1 ? "pointer-events-none opacity-50" : ""} ${theme === 'dark' ? 'text-white hover:text-festival-golden' : ''}`}
            />
          </PaginationItem>
          
          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink 
                isActive={currentPage === index + 1}
                onClick={() => onPageChange(index + 1)}
                className={theme === 'dark' && currentPage !== index + 1 ? 'text-white hover:text-festival-golden' : ''}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          
          <PaginationItem>
            <PaginationNext 
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : ""} ${theme === 'dark' ? 'text-white hover:text-festival-golden' : ''}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default GalleryPagination;
