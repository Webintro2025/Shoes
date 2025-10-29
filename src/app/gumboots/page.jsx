import React from 'react'
import Link from 'next/link'
import productData from '../../product.js'

const page = () => {
  // Gumboots category se products nikalna
  const gumbootsCategory = productData.categories.find(category => 
    category.name === "Gumboots"
  )

  // Function to create URL slug from product name
  const createSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#DD2B1C] mb-10">Gumboots</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {gumbootsCategory && gumbootsCategory.products.map((product, index) => {
          const slug = createSlug(product.name)
          return (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow group">
              <Link href={`/product/${slug}`} className="block">
                <div className="relative w-full h-40 sm:h-64 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.images && product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  {product.images && product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={`${product.name} - view 2`}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}
                </div>

                <h3 className="text-xs sm:text-lg font-semibold text-center bg-black text-white py-2 px-3 rounded">
                  {product.name}
                </h3>
              </Link>

              <div className="mt-3 flex justify-center">
                <Link href={`/product/${slug}`} className="inline-block bg-[#DD2B1C] hover:bg-[#b71b14] text-white font-semibold py-2 px-4 rounded text-sm sm:text-base">
                  Read more
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      
      {!gumbootsCategory && (
        <p className="text-center text-gray-500">No products found in Gumboots category</p>
      )}
    </div>
  )
}

export default page