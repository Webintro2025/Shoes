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

          {/* Description */}
          {product.content?.description && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Product Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {product.content.description}
              </p>
            </div>
          )}

          {/* Characteristics Section */}
          {Array.isArray(product.content.Charactertistics) && product.content.Charactertistics.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.content.Charactertistics.map((group, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {group.title}
                    </h3>
                    <ul className="space-y-2">
                      {group.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#DD2B1C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="uppercase tracking-wide text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          
        </div>
        
      </div>


      {/* Specification Table */}
          {Array.isArray(product.content.features) && product.content.features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl  px-11 font-semibold text-gray-900 mb-4">
                Specifications
              </h2>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {product.content.features.map((feature, index) => {
                      const [rawLabel, ...rawValue] = feature.split(':')
                      const label = rawLabel.replace(/^\d+\.\s*/, '').trim()
                      const value = rawValue.join(':').trim()
                      return (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        >
                          <th className="w-1/3 px-4 py-3 text-gray-600 font-semibold uppercase tracking-wide">
                            {label}
                          </th>
                          <td className="px-4 py-3 text-gray-800">
                            {value}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#DD2B1C] text-white px-8 py-3 rounded-lg hover:bg-[#B91C1C] transition-colors font-semibold">
              Contact for Quote
            </button>
            {product.content.pdf && (
              <a
                href={product.content.pdf}
                download
                className="inline-block bg-red-600  border border-gray-300 text-gray-800 px-6 py-3 text-white rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Download PDF
              </a>
            )}
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