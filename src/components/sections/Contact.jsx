import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "../../assets/images/galeri1.jpg";
import caramel from "../../assets/images/contact.png";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";
import icon6 from "../../assets/icons/icon6.png";
import icon7 from "../../assets/icons/icon7.png";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const cupRef = useRef(null);
  const textRef = useRef(null);
  const rightRef = useRef(null);
  const iconsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1280;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true, // KUNCI: re-calculate ulang posisi tiap kali refresh dipanggil
        },
      });

      if (isMobile) {
        tl.from(rightRef.current, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
          .from(
            cupRef.current,
            { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.6)" },
            "-=0.3",
          )
          .from(
            textRef.current.children,
            {
              y: 30,
              opacity: 0,
              stagger: 0.2,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.3",
          )
          .from(
            leftRef.current,
            { y: 60, opacity: 0, duration: 0.8, ease: "power3.out" },
            "-=0.4",
          )
          .from(
            iconsRef.current.children,
            {
              scale: 0.6,
              opacity: 0,
              rotate: -20,
              stagger: 0.08,
              duration: 0.45,
              ease: "back.out(1.7)",
            },
            "-=0.3",
          );
      } else {
        tl.from(leftRef.current, {
          x: -80,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        })
          .from(
            cupRef.current,
            { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.6)" },
            "-=0.4",
          )
          .from(
            textRef.current.children,
            {
              y: 30,
              opacity: 0,
              stagger: 0.2,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.3",
          )
          .from(
            rightRef.current,
            { x: 80, opacity: 0, duration: 0.9, ease: "power3.out" },
            "-=0.7",
          )
          .from(
            iconsRef.current.children,
            {
              scale: 0.6,
              opacity: 0,
              rotate: -20,
              stagger: 0.08,
              duration: 0.45,
              ease: "back.out(1.7)",
            },
            "-=0.5",
          );
      }
    }, sectionRef);

    // KUNCI: refresh ScrollTrigger setelah semua gambar (icon, cup, galeri) selesai load
    // biar posisi trigger diukur ulang sesuai tinggi halaman yang final
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      ctx.revert();
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col-reverse xl:flex-row items-stretch xl:h-screen my-12 xl:my-24 overflow-hidden"
    >
      {/* LEFT */}
      <div
        ref={leftRef}
        className="relative w-full xl:w-1/2 h-[500px] xl:h-full"
      >
        <img className="w-full h-full object-cover" src={img} alt="" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <img
          ref={cupRef}
          className="absolute top-2 left-1/2 w-[250px] xl:w-[350px] -translate-x-1/2 object-contain"
          src={caramel}
          alt=""
        />

        <div
          ref={textRef}
          className="absolute top-2/3 w-full max-w-xs left-1/2 -translate-x-1/2 xl:translate-y-1/5 text-white text-center flex flex-col items-center gap-4"
        >
          <span>
            Sambil menikmati secangkir kopi, siapa tahu ceritamu hari ini jadi
            lebih hangat. Yuk, singgah sebentar.
          </span>

          <button className="w-fit bg-[#1746A2] px-4 py-2 rounded-4xl text-white font-medium">
            Kunjungi Kami
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div
        ref={rightRef}
        className="relative w-full xl:w-1/2 h-[500px] overflow-hidden bg-[#F4B342] px-6 py-12 xl:p-12"
      >
        {/* Decorative Icons */}
        <div ref={iconsRef} className="pointer-events-none absolute inset-0">
          <img
            src={icon1}
            className="absolute bottom-32 opacity-40 left-8 w-20 -rotate-6"
            alt=""
          />
          <img
            src={icon2}
            className="absolute bottom-10 opacity-40 left-5 xl:left-35 w-20 rotate-12"
            alt=""
          />
          <img
            src={icon3}
            className="absolute bottom-35 opacity-40 right-10 w-20 rotate-3"
            alt=""
          />
          <img
            src={icon4}
            className="absolute bottom-30 opacity-40 left-35 xl:left-55 w-20 -rotate-12"
            alt=""
          />
          <img
            src={icon5}
            className="absolute bottom-6 opacity-40 right-50 xl:right-55 w-20 rotate-6"
            alt=""
          />
          <img
            src={icon6}
            className="absolute bottom-6 opacity-40 right-24 w-20 -rotate-6"
            alt=""
          />
          <img
            src={icon7}
            className="absolute bottom-6 opacity-40 left-76 w-20 -rotate-6"
            alt=""
          />
        </div>

        {/* Heading */}
        <h2 className="relative z-10 text-4xl xl:text-6xl font-semibold leading-tight text-[#1746A2]/30">
          Apapun cerita hari ini, ada{" "}
          <span className="text-[#1746A2]">tempat hangat</span> menantimu di
          sini.
        </h2>
      </div>
    </section>
  );
};

export default Contact;
