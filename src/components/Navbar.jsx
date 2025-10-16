"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-white">
      {/* Top Contact Bar */}
      <div className="bg-black text-white text-[10px] sm:text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2 sm:gap-6 px-3 py-2">
          <div className="flex items-center gap-2">
            <i className="fas fa-phone-alt text-white text-sm"></i>
            <span className="font-semibold">9773797782</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-envelope text-white text-sm"></i>
            <span className="font-semibold">malgresafety@gmail.com</span>
          </div>
        </div>
      </div>

      <nav className={`bg-white text-gray-900 border-b border-gray-200 relative px-2 sm:px-4 md:px-6 lg:px-8 py-3 transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            <img
              src="/logo.png"
              alt="Blue lighthouse factory icon with smoke and clouds"
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 group-hover:opacity-80 transition-opacity"
            />
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-xl font-extrabold text-gray-900 leading-none flex items-center">
                Malgre <span className="ml-2 text-[#DD2B1C]"> Safety Solutions </span>
              </h1>
              <p className="text-gray-500 pl-[3px] text-[10px] md:text-sm mt-1">Private Limited</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-1 justify-center items-center space-x-8 text-sm font-semibold">
            <li>
              <Link href="/" className="text-[#DD2B1C]">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-900 hover:text-[#DD2B1C] transition-colors">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-900 hover:text-[#DD2B1C] transition-colors">
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-900 hover:text-[#DD2B1C] transition-colors">
                CONTACT US
              </Link>
            </li>
            <li>
              <Link href="/industries" className="text-gray-900 hover:text-[#DD2B1C] transition-colors">
                INDUSTRIES
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-[#DD2B1C] hover:bg-[#b71b14] text-white font-semibold py-2 md:py-3 px-4 md:px-8 rounded-full tracking-wide text-xs sm:text-sm">
              WhatsApp
            </button>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-gray-900 focus:outline-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {/* CTA Button visible for mobile */}
        <div className="md:hidden mt-3 max-w-7xl mx-auto">
          <button className="w-full bg-[#DD2B1C] hover:bg-[#b71b14] text-white font-semibold py-2 rounded-full text-sm">
            WhatsApp
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100 border-t border-gray-200' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="max-w-7xl mx-auto">
          <ul className="flex flex-col space-y-2 py-4 text-sm font-semibold text-gray-900">
            <li>
              <Link
                href="/"
                className="text-[#DD2B1C] block py-2 border-b border-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#DD2B1C] block py-2 border-b border-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-[#DD2B1C] block py-2 border-b border-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#DD2B1C] block py-2 border-b border-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="hover:text-[#DD2B1C] block py-2"
                onClick={() => setMenuOpen(false)}
              >
                INDUSTRIES
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
