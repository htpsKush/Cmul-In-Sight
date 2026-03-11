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
      <section id="about">
      <Triad />
      <Clarity />
      <ValuesGrid />
      </section>
      <section id="work">
      <Work />
      </section>
      <FAQ />
      <Footer />
    </>
  );
}
