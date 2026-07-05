import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
