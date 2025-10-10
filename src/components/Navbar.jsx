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
    <div>
      {/* Main Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between px-2 sm:px-4 md:px-20 py-1">
        <div className="flex flex-row w-full items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <img
              src="/logo.png"
              alt="Blue lighthouse factory icon with smoke and clouds"
              className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 group-hover:opacity-80 transition-opacity"
            />
            <div>
              <h1 className="text-[13px] sm:text-base md:text-2xl font-extrabold text-gray-900 leading-none flex items-center">
                Malgre  <span className=" ml-2 text-[#DD2B1C]"> Safety Solutions </span>
              </h1>
              <p className="text-gray-500 pl-1 text-[9px] sm:text-xs md:text-sm mt-1">Private Limited</p>
            </div>
          </Link>
          <div className="flex flex-row items-center gap-2 md:gap-6 text-gray-700 text-[9px] sm:text-xs md:text-sm font-normal md:ml-auto">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <i className="fas fa-map-marker-alt text-yellow-500 text-base sm:text-lg"></i>
              <div>
                <div className="hidden md:block">Email Address</div>
                <div className="font-bold text-black text-[9px] sm:text-xs md:text-sm">malgresafety@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 border-l border-gray-300 pl-2 sm:pl-4 md:pl-4 md:border-l">
              <i className="fas fa-phone-alt text-yellow-500 text-base sm:text-lg"></i>
              <div>
                <div className="hidden md:block">Call Us</div>
                <div className="font-bold text-black text-[9px] sm:text-xs md:text-sm">9773797782</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className={`bg-[#DD2B1C] text-white relative px-2 md:px-20 py-2 transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''
      }`}>
        <div className="flex items-center justify-between">
          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-white focus:outline-none z-50"
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

          {/* Desktop Menu */}
          <ul className="hidden md:flex md:flex-row items-center space-x-6 text-sm font-semibold">
            <li>
              <Link href="/" className="text-yellow-500">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-500">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-yellow-500">
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-500">
                CONTACT US
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-yellow-500">
                INDUSTRIES
              </Link>
            </li>
          </ul>

          {/* WhatsApp Button */}
          <div className="flex items-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 md:py-3 px-4 md:px-6 rounded-md tracking-wide text-xs sm:text-sm">
              What'sApp
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <ul className="flex flex-col space-y-2 py-4 text-sm font-semibold">
            <li>
              <Link
                href="/"
                className="text-yellow-500 block py-2 border-b border-red-600"
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-500 block py-2 border-b border-red-600"
                onClick={() => setMenuOpen(false)}
              >
                ABOUT US
              </Link>
            </li>
            <li className="border-b border-red-600">
              <Link
                href="/products"
                className="hover:text-yellow-500 block py-2"
                onClick={() => setMenuOpen(false)}
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-500 block py-2 border-b border-red-600"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="hover:text-yellow-500 block py-2"
                onClick={() => setMenuOpen(false)}
              >
                INDUSTRIES
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
