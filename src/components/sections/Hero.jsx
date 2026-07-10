import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SocialCard from "../ui/SocialCard";
import hero from "../../assets/images/hero.webp";
import americano from "../../assets/images/americano.webp";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-heading-line", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
      })
        .from(".hero-info", { x: 40, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-image", { scale: 1.05, opacity: 0, duration: 1 }, "-=0.4")
        .from(
          ".hero-badge",
          { y: -20, opacity: 0, stagger: 0.08, duration: 0.5 },
          "-=0.6",
        )
        .from(".hero-social", { x: -20, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(
          ".hero-product-card",
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="px-6 pb-6 xl:px-24 xl:pb-24">
      <div className="flex flex-col xl:flex-row items-start pb-6 xl:pb-0 justify-between">
        <div className="py-12 overflow-hidden">
          <h1 className="text-6xl xl:text-8xl font-semibold text-[#1746A2]">
            <span className="hero-heading-line block">Ada</span>
            <span className="hero-heading-line ml-12 xl:ml-24 block text-[#1746A2]/30">
              Cerita Apa
            </span>
            <span className="hero-heading-line block">Hari Ini?</span>
          </h1>
        </div>

        <div className="hero-info flex flex-col gap-12 border-b-2 xl:border-l-2 border-gray-200 py-6 xl:p-12">
          <span className="font-medium text-[#1746A2]">
            <span className="font-bold">Buka Setiap Hari</span> <br />
            Senin - Jum'at: 09.00 - 24.00 WIB <br /> Sabtu - Minggu: 09.00 -
            03.00 WIB
          </span>
          <SocialCard />
        </div>
      </div>

      <div className="relative">
        <img
          className="hero-image h-[750px] object-cover rounded-4xl"
          src={hero}
          alt="Caramel Macchiato"
        />

        <div className="absolute top-6 left-6 flex flex-wrap gap-3 max-w-md">
          <span className="hero-badge rounded-full px-4 py-1 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md">
            Caramel Macchiato
          </span>
          <span className="hero-badge rounded-full px-4 py-1 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md">
            Vanilla Latte
          </span>
          <span className="hero-badge rounded-full px-4 py-1 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md">
            Matcha Latte
          </span>
          <span className="hero-badge rounded-full px-4 py-1 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md">
            Americano
          </span>
        </div>

        <div className="hero-social absolute bottom-6 left-6">
          <ul className="flex flex-col gap-2 rounded-full p-1 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md ">
            <li className="rounded-full flex items-center justify-center w-10 h-10 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md">
              <FaInstagram className="text-xl" />
            </li>
            <li className="rounded-full flex items-center justify-center w-10 h-10 text-white">
              <FaXTwitter className="text-xl" />
            </li>
            <li className="rounded-full flex items-center justify-center w-10 h-10 text-white ">
              <FaFacebook className="text-xl" />
            </li>
            <li className="rounded-full flex items-center justify-center w-10 h-10 text-white">
              <FaTiktok className="text-xl" />
            </li>
          </ul>
        </div>

        <div className="hero-product-card absolute bottom-6  xl:left-0 right-6 max-w-[180px] 2xl:max-w-md flex flex-col xl:flex-row items-stretch gap-4 rounded-2xl p-3 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md ">
          <img
            className="w-full xl:w-[150px] h-[150px]  object-cover rounded-2xl"
            src={americano}
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-lg">Americano</h4>
            <p className="text-sm">
              Espresso berpadu air panas atau es dengan rasa yang ringan dan
              bersih.
            </p>
            <div className="mt-auto flex flex-col gap-y-2 items-start xl:flex-row xl:items-center justify-between">
              <span className="font-medium text-xl">IDR 25.000</span>
              <button className="bg-white px-4 py-2 rounded-full text-sm text-[#1746A2]">
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
