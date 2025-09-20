'use client'
import React, { useState, useEffect } from 'react';

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Desktop banners array
  const desktopBanners = [
    '/banner1.jpg',
    '/banner2.jpg', 
    '/banner3.jpg'
  ];

  // Mobile banners array
  const mobileBanners = [
    '/banner1M.jpg',
    '/banner2M.jpg', 
    '/banner3M.jpg'
  ];

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);
    
    // Check if it's mobile on component mount and window resize
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // Both arrays have 3 banners
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, []);

  // Get current banners based on device type
  const currentBanners = isClient ? (isMobile ? mobileBanners : desktopBanners) : mobileBanners;

  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-[70vh] overflow-hidden">
      {/* Background Images Slideshow */}
      <div className="relative w-full h-full">
        {currentBanners.map((image, index) => (
          <div
            key={`banner-${index}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-20"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-20"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HomeBanner;
