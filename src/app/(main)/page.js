import Banner from "@/components/homapage/Banner";
import Faq from "@/components/homapage/Faq";
import Featured from "@/components/homapage/Featured";
import SuccessStories from "@/components/homapage/SuccessStories";
import WhoWeAre from "@/components/homapage/WhoWeAre";
import WhyAdopt from "@/components/homapage/WhyAdopt";

import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner />
      <WhoWeAre />
      <Featured />
      <div className="relative">
        <WhyAdopt />
      <SuccessStories />
      </div>
      <Faq />
    </div>
  );
}
