import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useProductAnimation = (productRef) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: productRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".product-heading", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "all",
      })
        .from(
          ".product-filter-item",
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.3",
        )
        .from(
          ".product-card-item",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.15",
        );
    },
    { scope: productRef },
  );
};
