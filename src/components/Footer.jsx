import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#000000] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-[#DD2B1C] mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Malgre
Safety Solutions
Private Limited
              </h1>
              <p className="text-sm text-white font-medium mb-3">
              Best Safety Shoes Manufacturer 
              </p>
              <p className="text-white text-sm leading-relaxed">
              Malgre Safety Solutions Private Limited is a trusted name in the safety footwear industry, dedicated to providing high-quality safety shoes and gumboots that ensure the protection and comfort of workers across various industries. With a commitment to excellence and innovation.
              </p>
            </div>
          </div>

          {/* Services and Quick Links - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-4 lg:contents">
            {/* Services */}
            <div>
              <h3 className="text-base lg:text-lg font-semibold text-white mb-1">
                Our Services
              </h3>
              <div className='w-16 lg:w-20 h-0.5 bg-[#DD2B1C] mb-3.5'></div>
              <ul className="text-gray-300 text-xs lg:text-sm space-y-1 lg:space-y-1.5">
                <li>
                  <Link href="/safety-shoe-pu" className="hover:text-[#DD2B1C] transition-colors">
                    Safety Shoe PU
                  </Link>
                </li>
                <li>
                  <Link href="/safety-shoe-pvc" className="hover:text-[#DD2B1C] transition-colors">
                    Safety Shoe PVC
                  </Link>
                </li>
                <li>
                  <Link href="/gumboots" className="hover:text-[#DD2B1C] transition-colors">
                    Gumboots
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base lg:text-lg font-semibold text-white mb-1">
                Quick Links
              </h3>
              <div className='w-16 lg:w-20 h-0.5 bg-[#DD2B1C] mb-3.5'></div>
              <ul className="text-gray-300 text-xs lg:text-sm space-y-1 lg:space-y-1.5">
                <li className="hover:text-[#DD2B1C] cursor-pointer transition-colors">
                  About Us
                </li>
                <li className="hover:text-[#DD2B1C] cursor-pointer transition-colors">
                  Our Services
                </li>
                <li className="hover:text-[#DD2B1C] cursor-pointer transition-colors">
                  Contact Us
                </li>
                <li className="hover:text-[#DD2B1C] cursor-pointer transition-colors">
                  Industries
                </li>
                
              </ul>
            </div>
          </div>

          {/* Contact Info and Follow Us - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-4 lg:block">
            {/* Contact Information */}
            <div>
              <h3 className="text-base lg:text-lg font-semibold text-white mb-1">
                Contact Info
              </h3>
              <div className='w-16 lg:w-20 h-0.5 bg-[#DD2B1C] mb-3.5'></div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#DD2B1C] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm">Phone</p>
                    <p className="text-white font-semibold">9773797782</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#DD2B1C] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm">Email</p>
                    <p className="text-white font-semibold">malgresafety@gmail.com
</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#DD2B1C] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12.93V13a1 1 0 10-2 0v1.93A6.002 6.002 0 014 12H3a7.963 7.963 0 002.06 5.06l1.42-1.42A6.002 6.002 0 0110 18a6.002 6.002 0 014.52-2.36l1.42 1.42A7.963 7.963 0 0017 12h-1a6.002 6.002 0 01-5 2.93z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm">Address</p>
                    <p className="text-white font-semibold">Khasra No. 45//23/2, Village Mundka, Mundka, New Delhi-110041, Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Section - No Follow Us */}
            <div className="lg:hidden">
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
  <div className="border-t border-[#DD2B1C] bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
            <div className="text-white mb-2 md:mb-0 text-center md:text-left">
              © 2025 Margel Safety Solutions Private Limited. All rights reserved. | Established 2019
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end text-white text-xs md:text-sm">
              <span>Developed with</span>
              <svg className="w-3 h-3 md:w-4 md:h-4 text-red-500 mx-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span>by</span>
              <a href="https://webintro.in/" target="_blank" rel="noopener noreferrer" className="text-[#DD2B1C] hover:text-white transition-colors font-medium mx-1">
                Webintro.in
              </a>
              <span>and</span>
              <a href="https://webintro.in/delhi/" target="_blank" rel="noopener noreferrer" className="text-[#DD2B1C] hover:text-white transition-colors font-medium mx-1">
                Google Promotion Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;