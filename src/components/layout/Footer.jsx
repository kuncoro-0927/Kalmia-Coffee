import { useRef, useLayoutEffect } from "react";
import { IoIosCall, IoIosMail } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const bottomRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(leftRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          rightRef.current,
          {
            x: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          bottomRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="px-24 py-12">
      <div className="flex items-end justify-between border-b pb-12">
        {/* Left */}
        <div
          ref={leftRef}
          className="flex flex-col gap-2"
        >
          <h3 className="text-2xl font-semibold">
            Kalmia Coffee
          </h3>

          <span className="text-4xl font-semibold">
            Sampai jumpa di cerita berikutnya.
          </span>

          <p className="max-w-md">
            Entah cerita bahagia atau sekadar mencari waktu untuk diri sendiri,
            Kalmia Coffee selalu punya tempat dan secangkir kopi untukmu.
          </p>

          <ul className="mt-6 flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <IoIosCall className="text-2xl" />
              081937842324
            </li>

            <li className="flex items-center gap-2">
              <IoIosMail className="text-2xl" />
              kalmiacoffee@gmail.com
            </li>
          </ul>
        </div>

        {/* Right */}
        <div ref={rightRef}>
          <h4>Follow Our Media Social</h4>

          <ul className="mt-6 uppercase flex items-center gap-6 font-semibold">
            <li>Instagram</li>
            <li>Tiktok</li>
            <li>X</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div
        ref={bottomRef}
        className="flex items-center justify-between pt-6"
      >
        <span>Pacitan, Jawa Timur</span>
        <span>© 2026 Kalmia Coffee. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;