
import React from 'react';

const GallerySubmitCTA = () => {
  return (
    <div className="mt-16 p-6 bg-white rounded-xl shadow-md text-center card-festive">
      <h3 className="text-xl font-heading text-festival-maroon dark:text-festival-golden mb-3">Have your own magical Puja frame to share?</h3>
      <p className="mb-4 dark:text-gray-300">Submit it today and be featured in our gallery!</p>
      <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="btn-festive transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
        Submit via Google Form
      </a>
    </div>
  );
};

export default GallerySubmitCTA;
