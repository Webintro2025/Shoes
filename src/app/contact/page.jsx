import React from "react";
import GetInTouch from "../../components/GetInTouch";
import Maps from "../../components/Maps";

const ContactUsPage = () => (
  <main className="bg-[#f7f5f5] min-h-screen">
    <div className="w-full px-2 sm:px-4 md:px-8 py-6 sm:py-8 md:py-14">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#DD2B1C] text-center mb-6 sm:mb-8 md:mb-10 tracking-tight">
        Contact Us
      </h1>
      <GetInTouch />
      <Maps />
    </div>
  </main>
);

export default ContactUsPage;
