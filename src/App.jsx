import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Product from "./components/sections/Product";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Testimonial from "./components/sections/Testimonial";
import Contact from "./components/sections/Contact";
// import ChatWidget from "./components/ui/ChatWidget";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      {/* <ChatWidget /> */}
      <Navbar />

      <main>
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
