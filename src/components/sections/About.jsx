import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import about from "../../assets/images/about.webp";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // kasih tau browser dari awal: elemen ini bakal sering berubah ukuran/posisi
      gsap.set(".about-image", {
        willChange: "width, height, left, top",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to({}, { duration: 1.5 })
        .to(".about-image", {
          width: "40%",
          height: "60%",
          left: "52%", // dihitung: 100% - 8%(jarak kanan) - 40%(lebar akhir) = 52%
          top: "20%",
          borderRadius: "24px",
          duration: 1,
          ease: "power2.inOut",
        })
        .from(".about-text", { opacity: 0, x: -40, duration: 0.6 }, "-=0.6");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ contain: "layout paint" }}
    >
      <img
        src={about}
        alt=""
        className="about-image absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="about-text absolute left-[8%] top-1/2 -translate-y-1/2 max-w-md z-10">
        <span className="text-sm uppercase tracking-widest text-[#00558e] font-semibold">
          Cerita kami
        </span>
        <h2 className="font-heading text-4xl font-semibold mt-3 mb-4">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum
          quos quia.
        </p>
      </div>
    </section>
  );
};

export default About;