import React from "react";

const WhatWeDo = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f7fafc] via-[#eaf1fa] to-[#f7fafc] py-10 sm:py-12 md:py-16 px-2 sm:px-4 md:px-16">
      <div className="w-full max-w-7xl mx-auto p-0 md:p-0">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#DD2B1C] mb-6 sm:mb-8 text-center tracking-tight">
          What We Do
        </h2>
        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-[#DD2B1C] text-[13px] sm:text-base md:text-lg font-medium px-2 sm:px-4 md:px-20">
          <p className="opacity-80 leading-relaxed">
            Malgre Safety Solutions specializes in the manufacturing and distribution of high-quality safety footwear and Personal Protective Equipment (PPE). Our product range is meticulously designed to meet the rigorous demands of various industries, including construction, manufacturing, logistics, and more.
          </p>
          
          <p className="text-black font-bold text-lg sm:text-xl">Our key product offerings include:</p>
          
          <div className="space-y-4">
            <div>
              <span className="text-black font-bold">Safety Shoes:</span>{" "}
              <span className="opacity-80">
                Our comprehensive collection of safety shoes features a variety of designs and specifications, such as our Malgre Fabb, Malgre Leonine, and Malgre Bestgo series. We provide options with different features like steel toes, anti-slip soles, and specialized materials to ensure maximum protection and comfort for the wearer. We also offer specific lines for diverse needs, including Safety Shoes in both PVC and PU.
              </span>
            </div>
            
            <div>
              <span className="text-black font-bold">Safety Gumboots:</span>{" "}
              <span className="opacity-80">
                We offer an extensive selection of safety gumboots designed to provide superior protection against water, chemicals, and other hazards in wet or harsh conditions.
              </span>
            </div>
            
            <div>
              <span className="text-black font-bold">Specialized PPE:</span>{" "}
              <span className="opacity-80">
                Beyond footwear, we also manufacture and supply a range of essential safety gear, including safety harnesses and safety belts, reinforcing our commitment to comprehensive worker protection. We also provide specialized products like Ladies Safety Shoes, ensuring we cater to the diverse needs of the modern workforce.
              </span>
            </div>
          </div>
          
          <p className="opacity-80 leading-relaxed mt-6">
            Our success is a testament to our ability to deliver products that are both high in quality and competitive in price, making us a trusted partner for companies across various sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
