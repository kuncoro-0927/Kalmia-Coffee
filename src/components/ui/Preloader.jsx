import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const LOGO_PATH =
  "M12.5928 0H8.87629C9.02062 3.41801 6.90979 5.00693 4.87113 5.00693C2.63402 5.00693 1.17268 3.39954 1.17268 0H0C0 8.92379 9.59794 7.13164 9.99485 1.23788H11.366C11.366 1.95843 10.6804 5.47261 7.81186 6.61432C4.5067 7.92979 1.2268 7.16243 0 6.61432V16H3.62629V10.9376C7.57732 10.8822 8.33505 10.1986 8.58763 10.1432C8.78969 10.0988 10.7887 13.2286 11.7629 14.7991H10.3737L8.01031 11.3256L6.78351 11.6028L9.74227 16H14C12.3883 13.5858 9.13608 8.73164 9.02062 8.62818C7.2165 9.8254 3.87887 9.80447 2.43557 9.64434V14.7991H1.17268V8.27714C3.51804 8.86836 7.34278 8.67854 9.59794 7.00231C12.2825 5.00693 12.7131 1.50269 12.5928 0Z";

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoWrapRef = useRef(null);
  const strokePathRef = useRef(null);
  const fillPathRef = useRef(null);
  const [isDone, setIsDone] = useState(false);

  useGSAP(
    () => {
      const pathLength = strokePathRef.current.getTotalLength();

      gsap.set(strokePathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });
      gsap.set(fillPathRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          setIsDone(true);
          onComplete?.();
        },
      });

      // garis logo "digambar" dari titik awal path
      tl.to(strokePathRef.current, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.inOut",
      })
        // logo solid muncul menimpa garis
        .to(
          fillPathRef.current,
          { opacity: 1, duration: 0.4, ease: "power1.out" },
          "-=0.15"
        )
        // garis outline-nya menghilang
        .to(strokePathRef.current, { opacity: 0, duration: 0.3 }, "<")
        // tahan logo solid kelihatan
        .to({}, { duration: 0.5 })
        // exit
        .to(logoWrapRef.current, {
          opacity: 0,
          scale: 1.08,
          duration: 0.4,
          ease: "power2.in",
        })
        .to(
          containerRef.current,
          { opacity: 0, duration: 0.5, ease: "power2.inOut" },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col gap-5 items-center justify-center bg-white"
    >
      <div ref={logoWrapRef} className="w-24 sm:w-24">
        <svg viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={strokePathRef}
            d={LOGO_PATH}
            fill="none"
            stroke="#1746A2"
            strokeWidth="0.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path ref={fillPathRef} d={LOGO_PATH} fill="#1746A2" />
        </svg>
      </div>
      <span className="font-semibold text-2xl">Kalmia Coffee</span>
    </div>
  );
};

export default Preloader;