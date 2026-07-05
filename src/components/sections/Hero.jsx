import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroimg from "../../assets/images/macchiato.png";
import SocialCard from "../ui/SocialCard";
const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-heading", { y: 30, opacity: 0, duration: 0.8 })
        .from(".hero-subheading", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(
          ".hero-image",
          { y: 60, opacity: 0, scale: 0.9, duration: 1, ease: "back.out(1.4)" },
          "-=0.4",
        )
        .from(
          ".hero-buttons button",
          { y: 20, opacity: 0, stagger: 0.15, duration: 0.6 },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="cloud-bg 2xl:p-28 relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <div className="hero-decor-layer">
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="cloud-blob blob-1" />
        <div className="cloud-blob blob-2" />
        <div className="cloud-blob blob-3" />
        <div className="cloud-blob blob-4" />
        <div className="cloud-grain" />

        <svg
          className="cloud-line"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 Q300,20 600,110 T1200,90"
            stroke="rgba(120,150,180,0.4)"
            strokeWidth="3"
            strokeDasharray="5 9"
            fill="none"
          />
        </svg>

        <svg
          className="cloud-sparkle sparkle-1"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="#7A9AB8"
        >
          <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
        </svg>
        <svg
          className="cloud-sparkle sparkle-2"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#7A9AB8"
        >
          <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative w-full z-10 text-center flex flex-col items-center justify-center">
        <h1 className="hero-heading text-5xl 2xl:text-6xl font-semibold max-w-xs 2xl:max-w-full">
          Scaling Italian Coffee
        </h1>
        <span className="hero-subheading font-heading italic font-medium text-5xl 2xl:text-6xl max-w-xs 2xl:max-w-full text-[#00558e]">
          Excellence to The World
        </span>

        <img
          className="hero-image -mt-12 w-[300px] 2xl:w-[350px] flex items-center justify-center rotate-8"
          src={heroimg}
          alt=""
        />

        <div className="hero-buttons mt-12 2xl:mr-auto 2xl:-mt-54 flex items-center gap-3">
          <SocialCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
