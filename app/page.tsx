import "./globals.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Triad from "./components/triad";
import Clarity from "./components/clarity";
import ValuesGrid from "./components/values";
import Work from "./components/work";
import FAQ from "./components/faq";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Triad />
      <Clarity />
      <ValuesGrid />
      <Work />
      <FAQ />
      <Footer />
    </>
  );
}
