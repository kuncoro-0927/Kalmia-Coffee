import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "./components/ui/Preloader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Product from "./components/sections/Product";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Testimonial from "./components/sections/Testimonial";
import Contact from "./components/sections/Contact";
import ChatWidget from "./components/ui/ChatWidget";
import { Element } from "react-scroll";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Preloader
          onComplete={() => {
            setIsLoading(false);
            // layout final baru kebentuk setelah preloader ilang,
            // jadi refresh posisi semua ScrollTrigger di halaman
            requestAnimationFrame(() => ScrollTrigger.refresh());
          }}
        />
      )}
      <ChatWidget />
      <Navbar />

      <main className="overflow-hidden">
        <Element name="hero">
          <Hero />
        </Element>

        <Element name="product">
          <Product />
        </Element>

        <Element name="about">
          <About />
        </Element>

        <Element name="gallery">
          <Gallery />
        </Element>

        <Element name="testimonial">
          <Testimonial />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
      </main>

      <Footer />
    </>
  );
}

export default App;
