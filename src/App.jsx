import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Product from "./components/sections/Product";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Testimonial from "./components/sections/Testimonial";
import Contact from "./components/sections/Contact";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Product />
        <About />
        <Gallery />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
