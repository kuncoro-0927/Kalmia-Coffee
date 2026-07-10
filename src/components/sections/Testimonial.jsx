import { useState, useRef, useLayoutEffect } from "react";
import { TbStarFilled } from "react-icons/tb";
import { ImQuotesLeft } from "react-icons/im";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Customers } from "../../data/Customers";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const [active, setActive] = useState(0);

  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const contentRef = useRef(null);
  const profileRef = useRef(null);

  const goPrev = () =>
    setActive((prev) => (prev === 0 ? Customers.length - 1 : prev - 1));

  const goNext = () =>
    setActive((prev) => (prev === Customers.length - 1 ? 0 : prev + 1));

  const current = Customers[active];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(quoteRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          titleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          lineRef.current,
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          contentRef.current.children,
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
          profileRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="p-24">
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-8 sm:gap-16">
        {/* Left Side */}
        <div
          ref={quoteRef}
          className="hidden sm:flex flex-col justify-between items-start h-full"
        >
          <ImQuotesLeft className="w-24 h-24 text-[#1746A2]" />

          <div className="flex items-center gap-4">
            <button
              onClick={goPrev}
              aria-label="Sebelumnya"
              className="w-11 h-11 rounded-full bg-[#1746A2] text-white flex items-center justify-center hover:bg-[#2c4030] transition-colors"
            >
              <IoIosArrowBack className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Customers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Ke testimoni ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === active ? "bg-[#1746A2]" : "bg-[#1746A2]/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Selanjutnya"
              className="w-11 h-11 rounded-full bg-[#1746A2]/10 text-[#1746A2] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <IoIosArrowForward className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2
            ref={titleRef}
            className="text-4xl sm:text-6xl font-semibold text-[#1746A2] mb-12"
          >
            Kesan dari Sahabat Kalmia
          </h2>

          <hr ref={lineRef} className="border-t border-gray-300 mb-12" />

          <div ref={contentRef}>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: current.rating }).map((_, i) => (
                <TbStarFilled
                  key={i}
                  className="w-8 h-8 text-amber-400 fill-amber-400"
                />
              ))}
            </div>

            <p className="text-2xl sm:text-5xl leading-snug text-[#1746A2] font-medium mb-10">
              {current.text}
            </p>
          </div>

          <div
            ref={profileRef}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8"
          >
            {/* Mobile Navigation */}
            <div className="flex sm:hidden items-center gap-4">
              <button
                onClick={goPrev}
                aria-label="Sebelumnya"
                className="w-11 h-11 rounded-full bg-[#1746A2] text-white flex items-center justify-center hover:bg-[#2c4030] transition-colors"
              >
                <IoIosArrowBack className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {Customers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Ke testimoni ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === active ? "bg-[#1746A2]" : "bg-[#1746A2]/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                aria-label="Selanjutnya"
                className="w-11 h-11 rounded-full bg-[#1746A2]/10 text-[#1746A2] flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <IoIosArrowForward className="w-5 h-5" />
              </button>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-12 h-12 rounded-md object-cover"
              />

              <div>
                <p className="font-semibold text-[#1746A2]">{current.name}</p>

                <p className="text-sm text-[#1746A2]">{current.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
