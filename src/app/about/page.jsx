import React from "react";
import About from "../../components/About";
import WhatWeDo from "../../components/WhatWeDo";
import WhyWeAreUnique from "../../components/WhyWeAreUnique";

const AboutUsPage = () => (
  <main className="bg-[#f7f5f5] min-h-screen">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-6 sm:py-8 md:py-14">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#DD2B1C] text-center mb-6 sm:mb-8 md:mb-10 tracking-tight">
        About Us
      </h1>
  <About full />
      <WhatWeDo />
      <WhyWeAreUnique />
    </div>
  </main>
);

export default AboutUsPage;
