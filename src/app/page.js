import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PracticeAreas from "../components/PracticeAreas";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TrustSection from "../components/TrustSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PracticeAreas />
      <About />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <TrustSection />
    </>
  );
}