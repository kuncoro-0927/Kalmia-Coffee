import { useEffect, useState } from "react";
import logo from "../../assets/logo-blue.svg";
import { Link as Scrollink } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 grid grid-cols-[1fr_auto_1fr] border-b-2 items-center px-8 2xl:px-24 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-white/90 border-transparent backdrop-blur-md shadow-md"
          : "py-6 bg-white  border-gray-200"
      }`}
    >
      <ul className="flex items-center gap-5 font-medium text-[#1746A2]">
        <li>
          <Scrollink
            to="product"
            smooth={true}
            duration={600}
            offset={-20}
            spy={true}
            className="cursor-pointer"
            activeClass="font-bold"
          >
            Menu
          </Scrollink>
        </li>

        <li>
          <Scrollink
            to="about"
            smooth={true}
            duration={600}
            offset={-20}
            spy={true}
            className="cursor-pointer"
            activeClass="font-bold"
          >
            Tentang
          </Scrollink>
        </li>

        <li>
          <Scrollink
            to="gallery"
            smooth={true}
            duration={600}
            offset={-20}
            spy={true}
            className="cursor-pointer"
            activeClass="font-bold"
          >
            Galeri
          </Scrollink>
        </li>

        <li>
          <Scrollink
            to="testimonial"
            smooth={true}
            duration={600}
            offset={-20}
            spy={true}
            className="cursor-pointer"
            activeClass="font-bold"
          >
            Ulasan
          </Scrollink>
        </li>
      </ul>

      <div className="flex items-center gap-2 justify-self-center text-xl font-bold">
        <img className="w-6" src={logo} alt="" />
        <span>Kalmia Coffee</span>
      </div>

      <div className="justify-self-end">
        <button className="rounded-full bg-[#1746A2] px-4 py-2 text-white">
          Pesan Sekarang
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
