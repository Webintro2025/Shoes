import React from "react";

const uniquePoints = [
  {
    title: "Uncompromising Quality",
    desc: "We use only the finest raw materials and employ rigorous quality control measures at every stage of production. Each product is engineered for durability, comfort, and protection, ensuring it performs reliably when it matters most.",
  },
  {
    title: "Extensive Product Range",
    desc: "Our diverse catalog ensures that you can find the perfect safety solution for any specific need. From standard industrial safety shoes to specialized gumboots and harnesses, we provide a one-stop-shop for your company's safety requirements.",
  },
  {
    title: "Reliability and Trust",
    desc: "As a registered Private Limited firm with a clear legal status and a transparent GST registration process, we operate with the highest level of professionalism and integrity. Our clients can have full confidence in our business practices and product authenticity.",
  },
  {
    title: "Experience and Expertise",
    desc: "Since 2019, we have leveraged our industry knowledge to innovate and refine our product lines. Our team understands the unique challenges of different industries and can provide expert guidance to help you select the right safety gear for your workforce.",
  },
  {
    title: "Customer-Centric Approach",
    desc: "We are committed to building strong, lasting relationships. We prioritize open communication and responsive service, ensuring that your experience with us is seamless from inquiry to delivery. Our goal is to be more than just a supplier; we aim to be a trusted partner in your commitment to workplace safety.",
  },
  {
    title: "Competitive Pricing",
    desc: "We believe that high-quality safety equipment should be accessible. Our efficient manufacturing processes and strategic sourcing allow us to offer premium products at competitive prices, providing excellent value for your investment.",
  }
];

const WhyWeAreUnique = () => (
  <section className="bg-[#f7f5f5] py-8 sm:py-10 md:py-14 px-2 sm:px-4 md:px-0">
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8 md:mb-10 text-center">
        <p className="text-black font-semibold text-xs sm:text-sm mb-2 tracking-wider flex items-center justify-center gap-2">
          <span className="inline-block w-8 sm:w-12 border-t-2 border-black" />
          WHY CHOOSE US
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#DD2B1C] mb-2 sm:mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          Choosing Malgre Safety Solutions means partnering with a company that puts your safety first. Here are the key reasons why our clients trust us as their preferred PPE supplier.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {uniquePoints.map((point, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-[#f1ecec] p-3 sm:p-4 md:p-6 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
              <span className="text-black font-bold text-base sm:text-lg md:text-xl">{idx + 1}.</span>
              <h3 className="font-semibold text-[#991b1b] text-base sm:text-lg md:text-xl leading-snug">
                {point.title}
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">{point.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12 text-center">
        <p className="text-[#DD2B1C] font-semibold text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          At Malgre Safety Solutions, we don't just sell products; we deliver peace of mind. We are dedicated to protecting your most valuable asset: your people.
        </p>
      </div>
    </div>
  </section>
);

export default WhyWeAreUnique;
