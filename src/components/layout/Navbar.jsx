import { Link as ScrollLink } from "react-scroll";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/logo-blue.svg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (open) {
        gsap.set([overlayRef.current, menuRef.current], {
          display: "block",
        });

        const tl = gsap.timeline();

        tl.fromTo(
          overlayRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.25,
          },
        )
          .fromTo(
            menuRef.current,
            {
              x: -350,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.55,
              ease: "power4.out",
            },
            "<",
          )
          .from(
            ".menu-item",
            {
              x: -25,
              opacity: 0,
              stagger: 0.08,
              duration: 0.35,
              ease: "power3.out",
            },
            "-=0.25",
          );
      } else {
        gsap.to(".menu-item", {
          opacity: 0,
          x: -20,
          duration: 0.15,
          stagger: {
            each: 0.03,
            from: "end",
          },
        });

        gsap.to(menuRef.current, {
          x: -350,
          opacity: 0,
          duration: 0.3,
          delay: 0.05,
          ease: "power3.in",
        });

        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.25,
          onComplete: () => {
            gsap.set([overlayRef.current, menuRef.current], {
              display: "none",
            });
          },
        });
      }
    }, menuRef);

    return () => ctx.revert();
  }, [open]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    { title: "Menu", to: "product" },
    { title: "Tentang", to: "about" },
    { title: "Galeri", to: "gallery" },
    { title: "Ulasan", to: "testimonial" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#f7f6f2]/90 border-b-2 border-transparent backdrop-blur-md shadow-md"
            : "bg-[#f7f6f2] border-b-2 border-gray-200"
        }`}
      >
        <div className="relative  flex items-center justify-between px-6 sm:px-12 xl:px-24 py-5">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-5 font-medium text-[#1746A2]">
            {menus.map((item) => (
              <li
                key={item.to}
                className="hover:underline underline-offset-8 duration-300 transition-all"
              >
                <ScrollLink
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-20}
                  spy
                  className="cursor-pointer transition-all"
                  activeClass="underline underline-offset-8"
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <ScrollLink
            to="hero"
            href="hero"
            smooth
            duration={600}
            offset={-90}
            spy
            className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-2 text-xl font-bold text-[#1746A2]"
          >
            <img src={logo} className="w-6" alt="" />
            <span>Kalmia Coffee</span>
          </ScrollLink>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <button className="rounded-full bg-[#1746A2] px-4 py-2 text-white cursor-pointer hover:-translate-y-0.5 duration-300 hover:bg-[#143b8a]">
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label="Button hamburger menu"
            onClick={() => setOpen(true)}
            className="ml-auto lg:hidden text-[#1746A2]"
          >
            <HiOutlineMenuAlt3 className="text-3xl" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        style={{ display: "none" }}
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 hidden bg-black/40 backdrop-blur-sm lg:hidden"
      />

      {/* Mobile Sidebar */}
      <aside
        ref={menuRef}
        style={{ display: "none" }}
        className="fixed left-4 sm:left-12 top-4 bottom-4 z-50 hidden w-[82%] h-[500px] max-w-xs rounded-[32px] bg-[#1746A2] text-white shadow-2xl lg:hidden"
      >
        <div className="flex h-full flex-col p-6">
          {/* Header */}
          <div className="menu-item flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <img src={logo} className="w-6 brightness-0 invert" alt="" />
              <span>Kalmia Coffee</span>
            </div>

            <button
              onClick={closeMenu}
              aria-label="Button close menu"
              className="flex items-center gap-1 rounded-full bg-white/20 px-4 py-2 text-sm"
            >
              <HiX />
              Tutup
            </button>
          </div>

          {/* Menu */}
          <ul className="mt-12 flex flex-col gap-8">
            {menus.map((item) => (
              <li key={item.to} className="menu-item">
                <ScrollLink
                  to={item.to}
                  href={item.to}
                  smooth
                  duration={600}
                  offset={-20}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-xl font-semibold"
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button
            aria-label="Pesan Sekarang"
            className="menu-item mt-10 rounded-full bg-white py-3 font-semibold text-[#1746A2]"
          >
            Hubungi Kami
          </button>

          {/* Footer */}
          <div className="menu-item mt-auto border-t border-white/20 pt-6 text-xs text-white/70">
            © 2026 Kalmia Coffee
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
