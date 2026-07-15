import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useTestimonialAnimation = (testimonialRef) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".testimonial-quote", {
        x: -60,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".testimonial-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".testimonial-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          ".testimonial-content > *",
          {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".testimonial-profile",
          {
            y: 30,
            opacity: 0,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.2",
        );
    },
    { scope: testimonialRef },
  );
};
