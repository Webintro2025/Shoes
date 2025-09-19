import React from 'react'
import Link from 'next/link'
import productData from '../../product.js'

const page = () => {
  // Safety Shoe PVC category se products nikalna
  const safetyShoesPVC = productData.categories.find(category => 
    category.name === "Safety Shoe PVC"
  )

  // Function to create URL slug from product name
  const createSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Safety Shoe PVC</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {safetyShoesPVC && safetyShoesPVC.products.map((product, index) => (
          <Link 
            key={index} 
            href={`/product/${createSlug(product.name)}`}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow group cursor-pointer"
          >
            {/* Image container with hover effect */}
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
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
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {product.name}
            </h3>
          </Link>
        ))}
      </div>
      
      {!safetyShoesPVC && (
        <p className="text-center text-gray-500">No products found in Safety Shoe PVC category</p>
      )}
    </div>
  )
}

export default page