
import React from 'react';
import { Search } from 'lucide-react';

interface GallerySearchProps {
  searchTerm: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GallerySearch = ({ searchTerm, onSearch }: GallerySearchProps) => {
  return (
    <div className="max-w-md mx-auto my-8">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          className="w-full bg-white border border-festival-golden/30 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-festival-golden/50 focus:border-transparent dark:bg-gray-800 dark:border-festival-golden/40 dark:text-white"
          placeholder="Search by title, photographer, category..."
          value={searchTerm}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default GallerySearch;
