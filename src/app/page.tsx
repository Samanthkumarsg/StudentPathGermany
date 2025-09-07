import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Intro from "@/components/Intro";
import SectionHelp from "@/components/SectionHelp";
import SectionWhyUs from "@/components/SectionWhyUs";
import SectionWorking from "@/components/SectionWorking";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Intro />
      <SectionWorking />
      <SectionWhyUs />
      <SectionHelp />
      <Footer />
      {/* <iframe
        src="https://tally.so/embed/3q90rY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="700"
        frameBorder="0"
        title="Tally Form"
        className="border "
        allowTransparency
        allow="camera; microphone; clipboard-write"
      ></iframe> */}
    </div>
  );
}
