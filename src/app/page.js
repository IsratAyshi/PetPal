import Banner from "@/components/homapage/Banner";
import Featured from "@/components/homapage/Featured";
import WhoWeAre from "@/components/homapage/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner />
      <WhoWeAre />
      <Featured />
    </div>
  );
}
