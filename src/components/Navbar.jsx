"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100); // Becomes sticky after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-500 text-[9px] sm:text-[11px] md:text-sm py-1 px-2 md:px-4 flex justify-between items-center border-b border-gray-200">
        <div>Welcome to Malgre Safety Solutions Private Limited</div>
        <div>
          GST NO : <span className="font-semibold italic"> 07AABCC1919J1ZS
 </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between px-2 sm:px-4 md:px-20 py-1">
        {/* Logo + Contact (row on mobile/tab, logo left + contact right on desktop) */}
        <div className="flex flex-row w-full items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/logo.png"
              alt="Blue lighthouse factory icon with smoke and clouds"
              className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20"
            />
            <div>
              <h1 className="text-[13px] sm:text-base md:text-2xl font-extrabold text-gray-900 leading-none flex items-center">
                Malgre  <span className=" ml-2 text-[#DD2B1C]"> Safety Solutions </span>
              </h1>
              <p className="text-gray-500 pl-1 text-[9px] sm:text-xs md:text-sm mt-1">Private Limited</p>
            </div>
          </div>
          {/* Contact Info (right side on desktop, below logo on mobile/tab) */}
          <div className="flex flex-row items-center gap-2 md:gap-6 text-gray-700 text-[9px] sm:text-xs md:text-sm font-normal md:ml-auto">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <i className="fas fa-map-marker-alt text-yellow-500 text-base sm:text-lg"></i>
              <div>
                <div className="hidden md:block">Email Address</div>
                <div className="font-bold text-black text-[9px] sm:text-xs md:text-sm">malgresafety@gmail.com
</div>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 border-l border-gray-300 pl-2 sm:pl-4 md:pl-4 md:border-l">
              <i className="fas fa-phone-alt text-yellow-500 text-base sm:text-lg"></i>
              <div>
                <div className="hidden md:block">Call Us</div>
                <div className="font-bold text-black text-[9px] sm:text-xs md:text-sm">9818008584</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className={`bg-[#DD2B1C] text-white flex flex-wrap md:flex-nowrap items-center px-2 md:px-20 py-2 transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''
      }`}>
        {/* Hamburger for mobile - now on the left */}
        <button
          className="md:hidden mr-2 text-white focus:outline-none order-1"
          style={{ order: 0 }} // Ensures left alignment in flex row
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
        {/* Menu */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-start md:items-center space-y-1 sm:space-y-2 md:space-y-0 md:space-x-6 text-[11px] sm:text-xs md:text-sm font-semibold absolute md:static left-0 top-full w-full md:w-auto bg-[#DD2B1C] md:bg-transparent z-30 px-2 sm:px-4 md:px-0 py-2 md:py-0 shadow md:shadow-none`}
        >
          <li>
            <Link
              href="/"
              className="text-yellow-500 block py-2 md:py-0"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-yellow-500 block py-2 md:py-0"
              onClick={() => setMenuOpen(false)}
            >
              ABOUT US
            </Link>
          </li>
          <li
            className="relative group w-full md:w-auto"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="hover:text-yellow-500 flex items-center w-full md:w-auto py-2 md:py-0"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              type="button"
            >
              SERVICES
              <svg className="ml-1 w-3 h-3 text-yellow-500 group-hover:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.293l3.71-3.06a.75.75 0 111.02 1.1l-4.25 3.5a.75.75 0 01-.98 0l-4.25-3.5a.75.75 0 01.02-1.06z"/></svg>
            </button>
            <ul
              className={`${
                dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              } absolute left-0 top-full z-20 min-w-[200px] bg-white text-gray-800 shadow-lg rounded-md py-1 transition-all duration-200 mt-2 border border-gray-200 
              text-[10px] sm:text-xs md:text-sm w-56`}
            >
              <li>
                <Link href="/safety-shoe-pu" className="block px-3 py-2 hover:bg-[#f7941d] hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                  SAFETY SHOE PU
                </Link>
              </li>
              <li>
                <Link href="/safety-shoe-pvc" className="block px-3 py-2 hover:bg-[#f7941d] hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                  SAFETY SHOE PVC
                </Link>
              </li>
              <li>
                <Link href="/gumboots" className="block px-3 py-2 hover:bg-[#f7941d] hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                  GUMBOOTS
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-yellow-500 block py-2 md:py-0"
              onClick={() => setMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </li>
          <li>
            <Link
              href="/industries"
              className="hover:text-yellow-500 block py-2 md:py-0"
              onClick={() => setMenuOpen(false)}
            >
               INDUSTRIES
            </Link>
          </li>
        </ul>
        <div className="ml-auto flex items-center space-x-2 px-2 md:px-4 py-2 rounded-md text-gray-400 text-[10px] sm:text-xs md:text-sm">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 md:py-3 px-4 md:px-6 rounded-md tracking-wide w-full md:w-auto text-xs sm:text-sm">
            What'sApp
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
