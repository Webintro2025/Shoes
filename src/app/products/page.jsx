"use client";

import React, { useState } from "react";
import Link from "next/link";
import productData from "../../product";

const categories = [
  "Safety Shoe PU",
  "Safety Shoe PVC",
  "Gumboots"
];

const createSlug = (name) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const activeCategory = productData.categories.find(cat => cat.name === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#DD2B1C] mb-10">Our Product Categories</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-8 gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-t-lg font-semibold border-b-4 transition-all duration-200 focus:outline-none ${activeTab === cat ? 'bg-white border-[#DD2B1C] text-[#DD2B1C]' : 'bg-gray-200 border-transparent text-gray-700 hover:bg-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {activeCategory && activeCategory.products.map((product, index) => {
          const slug = createSlug(product.name);
          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow group"
            >
              {/* Image container with hover effect; taller on mobile (default) */}
              <Link href={`/product/${slug}`} className="block">
                <div className="relative w-full h-40 sm:h-64 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  {product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={`${product.name} - view 2`}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}
                </div>

                {/* Product name with black background and white text */}
                <h3 className="text-xs sm:text-lg font-semibold text-center bg-black text-white py-2 px-3 rounded">
                  {product.name}
                </h3>
              </Link>

              {/* Read more button - navigates to product page */}
              <div className="mt-3 flex justify-center">
                <Link
                  href={`/product/${slug}`}
                  className="inline-block bg-[#DD2B1C] hover:bg-[#b71b14] text-white font-semibold py-2 px-4 rounded text-sm sm:text-base"
                >
                  Read more
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {!activeCategory && (
        <p className="text-center text-gray-500 mt-8">No products found in this category</p>
      )}
    </div>
  );
};

export default ProductsPage;
