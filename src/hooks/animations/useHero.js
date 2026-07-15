import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const useHeroAnimation = (containerRef) => {
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-heading-line", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
      })
        .from(
          ".hero-border-bottom",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-border-left",
          {
            scaleY: 0,
            transformOrigin: "top center",
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.5",
        )
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
};
