'use client'
import React, { useState, useEffect } from 'react';

const HomeBanner = () => {
  // Only a single static banner image, no slides

  return (
    <section className="relative w-full h-[20vh] md:h-[70vh] lg:h-[70vh] overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src="/banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HomeBanner;
