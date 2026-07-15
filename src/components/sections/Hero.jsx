import { useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import hero from "../../assets/images/hero.webp";
import americano from "../../assets/images/americano.webp";
import { useHeroAnimation } from "../../hooks/animations/useHero";
import SocialCard from "../ui/SocialCard";

const Hero = () => {
  const sectionRef = useRef(null);
  useHeroAnimation(sectionRef);

  const [active, setActive] = useState(0);

  return (
    <section ref={sectionRef} className="px-6 pb-6 sm:px-12 xl:px-24 xl:pb-24">
      <div className="flex flex-col items-start justify-between pb-6 lg:flex-row lg:pb-0">
        <div className="overflow-hidden py-12">
          <h1 className="text-6xl font-semibold text-[#1746A2] sm:text-7xl xl:text-8xl">
            <span className="hero-heading-line block">Ada</span>

            <span className="hero-heading-line ml-12 block text-[#1746A2]/50 xl:ml-24">
              Cerita Apa
            </span>

            <span className="hero-heading-line block">Hari Ini?</span>
          </h1>
        </div>

        <div className="hero-info relative flex w-full flex-col gap-12 py-6 lg:w-auto lg:p-12">
          <span className="hero-border-bottom absolute bottom-0 left-0 h-[1.5px] w-full bg-gray-200 lg:hidden" />

          <span className="hero-border-left absolute left-0 top-0 hidden h-full w-[1.5px] bg-gray-200 lg:block" />

          <span className="font-medium text-[#1746A2]">
            <span className="font-bold">Buka Setiap Hari</span>
            <br />
            Senin - Jum'at: 09.00 - 24.00 WIB
            <br />
            Sabtu - Minggu: 09.00 - 03.00 WIB
          </span>

          <SocialCard />
        </div>
      </div>

      <div className="relative">
        <img
          src={hero}
          alt="Caramel Macchiato"
          className="hero-image h-[750px] rounded-4xl object-cover"
        />
        <div className="absolute top-6 left-6 flex max-w-md flex-wrap gap-3">
          {[
            "Espresso Based",
            "Signature Coffee",
            "Non Coffee",
            "Refreshment",
            "Pastry & Dessert",
          ].map((item) => (
            <span
              key={item}
              className="hero-badge rounded-full border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 px-4 py-1 text-white shadow-md backdrop-blur-xs"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="hero-social absolute bottom-6 left-6">
          <ul
            className="flex flex-col gap-2 rounded-full border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 p-1 shadow-md backdrop-blur-xs"
            onMouseLeave={() => setActive(0)}
          >
            {[
              <FaInstagram />,
              <FaXTwitter />,
              <FaFacebook />,
              <FaTiktok />,
            ].map((Icon, index) => (
              <li
                key={index}
                onMouseEnter={() => setActive(index)}
                className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ${
                  active === index ? "bg-[#1746A2]/40 text-white backdrop-blur-xl" : "text-white"
                }`}
              >
                {Icon}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-product-card absolute bottom-6 right-6 flex max-w-[180px] flex-col gap-4 rounded-2xl border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 p-3 text-white shadow-md backdrop-blur-xs sm:max-w-[400px] sm:flex-row">
          <img
            src={americano}
            alt="Americano"
            className="h-[150px] w-full rounded-2xl object-cover sm:w-[150px]"
          />

          <div className="flex flex-col gap-2">
            <span className="text-lg font-medium">Americano</span>

            <p className="text-sm">
              Espresso berpadu air panas atau es dengan rasa yang ringan dan
              bersih.
            </p>

            <div className="mt-auto flex flex-col items-start justify-between gap-y-2 sm:flex-row xl:items-center">
              <span className="text-xl font-medium">IDR 25.000</span>

              <button className="cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1746A2] duration-300 hover:-translate-y-0.5">
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
