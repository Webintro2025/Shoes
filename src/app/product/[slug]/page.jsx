'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import productData from '../../../product.js'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch.jsx'

const ProductDetailPage = () => {
  const params = useParams()
  const slug = params.slug
  
  // Find the product by converting name to slug format
  const findProduct = () => {
    for (const category of productData.categories) {
      for (const product of category.products) {
        const productSlug = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
        if (productSlug === slug) {
          return { product, categoryName: category.name }
        }
      }
    }
    return null
  }

  const result = findProduct()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!result) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
        <Link href="/" className="text-[#DD2B1C] hover:underline mt-4 inline-block">
          Go back to home
        </Link>
      </div>
    )
  }

  const { product, categoryName } = result

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-[#DD2B1C]">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link 
              href={`/${categoryName.toLowerCase().replace(/\s+/g, '-')}`} 
              className="hover:text-[#DD2B1C]"
            >
              {categoryName}
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images Section */}
        <div>
          {/* Main Image */}

          <div className="mb-4">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-80 sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-5 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImageIndex === index 
                    ? 'border-[#DD2B1C]' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-24 sm:h-28 md:h-32 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div>
          <div className="mb-4">
            <span className="inline-block bg-red-100 text-[#DD2B1C] text-xs px-2 py-1 rounded-full mb-2">
              {categoryName}
            </span>
            <h1 className="text-2xl font-bold text-gray-900">
              {product.name}
            </h1>
          </div>

          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Features & Specifications
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3">
                {product.content.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-[#DD2B1C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#DD2B1C] text-white px-8 py-3 rounded-lg hover:bg-[#B91C1C] transition-colors font-semibold">
              Contact for Quote
            </button>
           
          </div>
        </div>
        
      </div>
       <div className="mt-12 text-center">
        <Link 
          href={`/${categoryName.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center text-[#DD2B1C] hover:text-[#B91C1C] font-medium"
        >
          ← Back to {categoryName}
        </Link>
      </div>
      <GetInTouch />

      {/* Back to Category Button */}
     
    </div>
  )
}

export default ProductDetailPage