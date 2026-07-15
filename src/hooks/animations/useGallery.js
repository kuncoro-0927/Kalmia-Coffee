import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useGalleryAnimation = (galleryRef) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".gallery-heading", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      }).from(
        ".gallery-item",
        {
          opacity: 0,
          y: 40,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      );
    },
    { scope: galleryRef },
  );
};
