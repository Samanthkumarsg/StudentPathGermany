import CurveDivider from "@/components/Squiggle";
import { Faq } from "@/components/Faq";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHelp from "@/components/SectionHelp";
import SectionWhyUs from "@/components/SectionWhyUs";
import Image from "next/image";
import Squiggle from "@/components/Squiggle";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Squiggle />
      <Hero />
      <SectionWhyUs />
      <SectionHelp />
      <Faq />
      <Footer />

    </div>
  );
}
