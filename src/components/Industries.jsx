'use client'
import React, { useState } from 'react'

const Industries = () => {
 const industries = [
    {
      name: "ENGINEERING & FABRICATION INDUSTRY",
      image: "/i1.png",
      description: "Heavy machinery and fabrication work environments"
    },
    {
      name: "AVIATION INDUSTRY", 
      image: "/i2.png",
      description: "Airport operations and aircraft maintenance"
    },
    {
      name: "AUTOMOBILE INDUSTRY",
      image: "/i3.png", 
      description: "Automotive manufacturing and assembly lines"
    },
    {
      name: "CONSTRUCTION INDUSTRY",
      image: "/i4.png",
      description: "Building construction and civil engineering"
    },
    {
      name: "MSME MANUFACTURING INDUSTRY",
      image: "/i5.png",
      description: "Small and medium scale manufacturing units"
    },
    {
      name: "HOSPITALITY INDUSTRY", 
      image: "/i6.jpg",
      description: "Hotels, restaurants and service industry"
    },
    {
      name: "STONE CRUSHERS & MINING INDUSTRY",
      image: "/i7.jpg",
      description: "Mining operations and stone crushing facilities"
    },
    {
      name: "FACILITY MANAGEMENT INDUSTRY",
      image: "/i8.png",
      description: "Building maintenance and facility services"
    },
    {
      name: "PAPER INDUSTRY",
      image: "/i9.png",
      description: "Paper mills and pulp manufacturing"
    },
    {
      name: "CEMENT INDUSTRY",
      image: "/i10.jpg", 
      description: "Cement plants and concrete manufacturing"
    },
    {
      name: "MEAT & FISHERIES INDUSTRY",
      image: "/i11.jpg",
      description: "Food processing and fisheries operations"
    },
    {
      name: "ELECTRONICS INDUSTRY",
      image: "/i12.jpeg",
      description: "Electronics manufacturing and assembly"
    },
    {
      name: "IRON & STEEL INDUSTRY", 
      image: "/i13.jpg",
      description: "Steel plants and metal processing"
    },
    {
      name: "LEATHER TANNERIES INDUSTRY",
      image: "/i14.jpg",
      description: "Leather processing and tanning operations"
    },
    {
      name: "TRANSPORTATION & LOGISTICS INDUSTRY",
      image: "/i15.jpg",
      description: "Logistics and transportation services"
    },
 
  ]
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing safety footwear solutions across diverse industries with specialized requirements
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.slice(0, 12).map((industry, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries