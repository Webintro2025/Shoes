'use client'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'

const IndustriesPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center bg-no-repeat text-white py-20" style={{backgroundImage: 'url(/industries.webp)'}}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Providing premium safety footwear solutions across diverse industries with specialized safety requirements and demanding work environments
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-lg font-semibold">
              17+ Industries • 1000+ Companies • 24/7 Support
            </div>
          </div>
        </div>
      </div>

      {/* Industries Grid Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500">
                  Industry #{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-2">
                <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                  {industry.name}
                </h3>
                
                {/* Animated Border */}
                <div className="mt-2 h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gray-600 to-gray-800 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </div>
              </div>

              {/* Hover Effect Corners */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
<GetInTouch />
    
    </div>
  )
}

export default IndustriesPage