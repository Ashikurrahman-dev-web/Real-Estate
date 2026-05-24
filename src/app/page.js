import Image from "next/image";
import Navbar from "@/component/Navbar";
import Properties from "@/component/Properties";
import HeroSlider from "@/component/Hero";
import Team from "@/component/Team";
import About from "@/component/About";
import StrategySection from "@/component/Strategy";
import Services from "@/component/Services";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mt-22">
        <HeroSlider />
        <About />
        <Properties />
        <Team />
        <Services />
        <StrategySection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
