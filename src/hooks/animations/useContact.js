import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useContactAnimation = (contactRef) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 1280;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });

      if (isMobile) {
        tl.from(".contact-right", {
          y: 60,
          opacity: 0,
          duration: 0.8,
        })
          .from(
            ".contact-cup",
            {
              scale: 0.8,
              opacity: 0,
              duration: 0.8,
              ease: "back.out(1.6)",
            },
            "-=0.3",
          )
          .from(
            ".contact-text > *",
            {
              y: 30,
              opacity: 0,
              stagger: 0.15,
              duration: 0.6,
            },
            "-=0.3",
          )
          .from(
            ".contact-left",
            {
              y: 60,
              opacity: 0,
              duration: 0.8,
            },
            "-=0.4",
          )
          .from(
            ".contact-pattern",
            {
              x: 40,
              y: 20,
              opacity: 0,
              duration: 0.9,
              ease: "power2.out",
            },
            "-=0.5",
          );
      } else {
        tl.from(".contact-left", {
          x: -80,
          opacity: 0,
          duration: 0.9,
        })
          .from(
            ".contact-cup",
            {
              scale: 0.8,
              opacity: 0,
              duration: 0.8,
              ease: "back.out(1.6)",
            },
            "-=0.4",
          )
          .from(
            ".contact-text > *",
            {
              y: 30,
              opacity: 0,
              stagger: 0.15,
              duration: 0.6,
            },
            "-=0.3",
          )
          .from(
            ".contact-right",
            {
              x: 80,
              opacity: 0,
              duration: 0.9,
            },
            "-=0.7",
          )
          .from(
            ".contact-pattern",
            {
              x: 40,
              y: 20,
              opacity: 0,
              duration: 0.9,
              ease: "power2.out",
            },
            "-=0.5",
          );
      }

      ScrollTrigger.refresh();
    },
    { scope: contactRef },
  );
};
