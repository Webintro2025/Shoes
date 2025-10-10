

import Link from "next/link";

const About = ({ full = false }) => (
  <div className="bg-white text-gray-900 py-8 md:py-16">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-[#f7941d] font-semibold text-sm mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-12 border-t-2 border-[#f7941d]" />
          ABOUT US
          <span className="inline-block w-12 border-t-2 border-[#f7941d]" />
        </p>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
          Malgre Safety Solutions Private Limited: About Us
        </h2>
      </div>

      {/* First Section - Image Left, Text Right, Larger Image */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center mb-10">
        <div className="order-2 md:order-1 md:col-span-2 flex justify-center">
          <img
            src="/aboutnew.jpg"
            alt="Safety Shoe"
            className="w-full max-w-md h-64 md:h-80 object-contain rounded-xl shadow-2xl border-2 border-[#f7941d]"
          />
        </div>
        <div className="order-1 md:order-2 md:col-span-3">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#DD2B1C]">Our Foundation</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
            Established in 2019, Malgre Safety Solutions Private Limited has quickly become a prominent name in the safety footwear and personal protective equipment (PPE) industry. Headquartered in West Delhi, India, we are a leading manufacturer, importer, and exporter of a wide range of safety products.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
            Our commitment to excellence has made us a trusted partner for businesses across various industries. We specialize in providing comprehensive safety solutions that meet international quality standards while ensuring maximum comfort and protection for workers in challenging environments.
          </p>
          {!full && (
            <Link href="/about" legacyBehavior>
              <a className="inline-block px-6 py-2 bg-[#f7941d] text-white font-semibold rounded-full shadow hover:bg-[#dd2b1c] transition-colors duration-200">Read More</a>
            </Link>
          )}
        </div>
      </div>

      {full && (
        <>
          {/* Second Section - Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center mb-16">
            <div className="md:col-span-3">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#DD2B1C]">Our Leadership & Team</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                Led by our visionary CEO, Rajesh Singal, we have built a team of over 100 dedicated professionals who work tirelessly to ensure that every product we deliver meets the highest industry standards. Our state-of-the-art manufacturing facility, located at Mundka, New Delhi, is equipped to produce a diverse portfolio of products, including our extensive lines of safety shoes and safety gumboots.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our team consists of experienced engineers, quality control specialists, and safety experts who bring decades of collective experience to every product we create. We continuously invest in advanced manufacturing technologies and employee training to maintain our competitive edge in the safety equipment industry.
              </p>
            </div>
            <div className="md:col-span-2">
              <img
                src="/Safety Shoe PU/LEONINE DOUBLE DENSITY/1.jpg"
                alt="Manufacturing"
                className="w-full max-w-xs mx-auto h-48 object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Third Section - Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 md:col-span-2">
              <img
                src="/Gumboots/BUSY/1.JPG"
                alt="Safety Gumboots"
                className="w-full max-w-xs mx-auto h-48 object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2 md:col-span-3">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#DD2B1C]">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                At Malgre Safety Solutions, we understand that safety is not a luxury—it's a necessity. Our mission is to provide reliable, durable, and comfortable safety gear that protects workers in even the most demanding environments. We are dedicated to building long-term relationships with our B2B partners by consistently exceeding expectations in product quality, service, and value.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We believe in continuous innovation and improvement, constantly researching new materials and technologies to enhance the protective capabilities of our products. Our comprehensive range serves industries from construction and manufacturing to hospitality and healthcare, ensuring that every worker has access to the safety protection they deserve.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
);

export default About;

