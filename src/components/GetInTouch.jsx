import React from "react";

const GetInTouch = () => {
  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
        {/* Contact Info Section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#DD2B1C] mb-5 sm:mb-8 text-left">
            Contact Information
          </h2>
          <div className="bg-gradient-to-br from-[#fff7ed] via-white to-[#fee2e2] border-l-4 sm:border-l-8 border-[#f7941d] shadow-xl rounded-2xl p-4 sm:p-6 md:p-10 max-w-xl mx-auto flex flex-col gap-4 sm:gap-7">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="bg-[#f7941d] text-white rounded-full p-2 sm:p-3 text-base sm:text-xl">
                <i className="fas fa-envelope"></i>
              </span>
              <div>
                <div className="text-[#DD2B1C] font-semibold text-xs sm:text-sm">
                  Mail ID
                </div>
                <div className="text-[#222] font-bold text-sm sm:text-base md:text-lg">
                  malgresafety@gmail.com

                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="bg-[#DD2B1C] text-white rounded-full p-2 sm:p-3 text-base sm:text-xl">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <div>
                <div className="text-[#f7941d] font-semibold text-xs sm:text-sm">
                  Address
                </div>
                <div className="text-[#222] font-bold text-sm sm:text-base md:text-lg">
                  Khasra No. 45//23/2, Village Mundka, Mundka, New Delhi-110041, Delhi, India
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="bg-[#f7941d] text-white rounded-full p-2 sm:p-3 text-base sm:text-xl">
                <i className="fas fa-phone-alt"></i>
              </span>
              <div>
                <div className="text-[#DD2B1C] font-semibold text-xs sm:text-sm">
                  Phone Number
                </div>
                <div className="text-[#222] font-bold text-sm sm:text-base md:text-lg">
                  9773797782
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="bg-[#DD2B1C] text-white rounded-full p-2 sm:p-3 text-base sm:text-xl">
                <i className="fas fa-id-card"></i>
              </span>
              <div>
                <div className="text-[#f7941d] font-semibold text-xs sm:text-sm">
                  GST Number
                </div>
                <div className="text-[#222] font-bold text-sm sm:text-base md:text-lg">
                  07AABCC1919J1ZS

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <form
            action="#"
            method="POST"
            className="bg-gray-50 p-4 sm:p-8 border border-gray-100 max-w-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name:"
              className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-sm text-xs sm:text-sm text-gray-500 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email:"
              className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-sm text-xs sm:text-sm text-gray-500 placeholder-gray-400"
            />
            <select
              name="subject"
              className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-sm text-xs sm:text-sm text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select One
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number:"
              className="w-full mb-6 sm:mb-8 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-sm text-xs sm:text-sm text-gray-500 placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-sm hover:bg-yellow-500 transition-colors text-xs sm:text-sm"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Banner */}
      <section className="bg-gradient-to-r from-[#DD2B1C] via-[#DD2B1C] to-[#DD2B1C] py-4 sm:py-6 px-2 sm:px-6 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white text-sm sm:text-lg font-light max-w-xl text-center sm:text-left">
            If You Need Any Industrial Solution{" "}
            <span className="text-yellow-400 font-semibold">
              ... We Are Available For You
            </span>
          </p>
          <button className="bg-yellow-400 text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-sm whitespace-nowrap hover:bg-yellow-500 transition-colors text-xs sm:text-sm">
            CONTACT US
          </button>
        </div>
      </section>
    </section>
  );
};

export default GetInTouch;
