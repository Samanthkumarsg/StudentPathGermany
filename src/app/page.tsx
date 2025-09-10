import { Faq } from "@/components/Faq";
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
      <Faq />
      <Footer />

    </div>
  );
}
