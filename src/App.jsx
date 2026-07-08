import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Product from "./components/sections/Product";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Product />
        <About />
        <Gallery/>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
