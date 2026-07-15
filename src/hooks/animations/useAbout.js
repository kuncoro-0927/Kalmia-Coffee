import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAboutAnimation = (aboutRef) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".about-text", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      })
        .from(
          ".about-image",
          {
            x: 80,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.4",
        )
        .from(
          ".about-card",
          {
            y: 40,
            scale: 0.95,
            opacity: 0,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.2",
        );
    },
    { scope: aboutRef },
  );
};
