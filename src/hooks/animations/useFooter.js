import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useFooterAnimation = (footerRef) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".footer-left", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".footer-right",
          {
            x: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".footer-bottom",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2",
        );
    },
    { scope: footerRef },
  );
};
