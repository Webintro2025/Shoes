'use client'
import React, { useState } from 'react'
import productData from '../product.js'

const Gallery = () => {
  const [showMore, setShowMore] = useState(false)
  
  // Har category se sirf 5 products lena
  const allProducts = []
  productData.categories.forEach(category => {
    const categoryProducts = category.products.slice(0, 5).map(product => ({
      ...product,
      categoryName: category.name
    }))
    allProducts.push(...categoryProducts)
  })

  // Total 15 products (5 from each category)
  const imagesToShow = showMore ? allProducts.length : 15

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Gallery</h2>
        <p className="text-gray-600 text-lg">Explore our complete range of safety footwear</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {allProducts.slice(0, imagesToShow).map((product, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            {/* Image container with hover effect */}
            <div className="relative w-full h-84 overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <img 
                src={product.images[1]} 
                alt={`${product.name} - view 2`}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              
              {/* Category Badge */}
              <div className="absolute top-2 left-2 bg-[#DD2B1C] text-white text-xs px-2 py-1 rounded-full">
                {product.categoryName}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800 text-center line-clamp-2">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Read More Button - Remove since we only have 15 products total */}
      {allProducts.length > 15 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-[#DD2B1C] text-white px-8 py-3 rounded-lg hover:bg-[#B91C1C] transition-colors font-semibold shadow-lg"
          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </div>
      )}

      {/* Product Count Info */}
     
    </div>
  )
}

export default Gallery