import { Faq } from "@/components/Faq";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHelp from "@/components/SectionHelp";
import SectionWhyUs from "@/components/SectionWhyUs";
import SectionWorking from "@/components/SectionWorking";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      {/* <SectionWorking /> */}
      <SectionWhyUs />
      <SectionHelp />
      <Faq />
      <Footer />

    </div>
  );
}
