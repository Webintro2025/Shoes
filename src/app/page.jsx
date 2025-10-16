import GetInTouch from "@/components/GetInTouch";

import About from "@/components/About";
import HomeBanner from "@/components/HomeBanner";
import WhatWeDo from "@/components/WhatWeDo";
import WhyWeAreUnique from "@/components/WhyWeAreUnique";
import Maps from "@/components/Maps";
import Gallery from "@/components/Gallery";
import Industries from "@/components/Industries";
import NewSection from "@/components/NewSection";
export default function Home() {
  return (
   <>
   <HomeBanner />
    <About />
    <Gallery />
   <WhatWeDo />
     <NewSection />
  <Industries />

   <WhyWeAreUnique />
  <GetInTouch />
  <Maps />
   </>
  );
}
