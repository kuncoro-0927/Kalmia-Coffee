import { useState, useRef } from "react";
import { TbStarFilled } from "react-icons/tb";
import { ImQuotesLeft } from "react-icons/im";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Customers } from "../../data/Customers";
import { useTestimonialAnimation } from "../../hooks/animations/useTestimonial";
const Testimonial = () => {
  const [active, setActive] = useState(0);
  const testimonialRef = useRef(null);
  useTestimonialAnimation(testimonialRef);

  const goPrev = () =>
    setActive((prev) => (prev === 0 ? Customers.length - 1 : prev - 1));

  const goNext = () =>
    setActive((prev) => (prev === Customers.length - 1 ? 0 : prev + 1));

  const current = Customers[active];

  return (
    <section ref={testimonialRef} className="px-6 py-12 sm:px-12 xl:p-24">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 sm:gap-16">
        {/* Left Side */}
        <div className="testimonial-quote hidden lg:flex flex-col justify-between items-start h-full">
          <ImQuotesLeft className="w-24 h-24 text-[#1746A2]" />

          <div className="flex items-center gap-4">
            <button
              onClick={goPrev}
              aria-label="Sebelumnya"
              className="w-11 h-11 rounded-full bg-[#1746A2] text-white flex items-center justify-center cursor-pointer hover:bg-[#143b8a] transition-colors"
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
              className="w-11 h-11 rounded-full bg-[#1746A2]/10 text-[#1746A2] cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <IoIosArrowForward className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <ImQuotesLeft className="w-16 h-16 lg:hidden mb-3 text-[#1746A2]" />
          <h2 className="testimonial-title text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1746A2] mb-6 xl:mb-12">
            Kesan dari Sahabat Kalmia
          </h2>

          <hr className="testimonial-line border-t border-gray-300 mb-12" />

          <div className="testimonial-content">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: current.rating }).map((_, i) => (
                <TbStarFilled
                  key={i}
                  className="w-8 h-8 text-amber-400 fill-amber-400"
                />
              ))}
            </div>

            <p className="text-2xl lg:text-3xl xl:text-5xl leading-snug text-[#1746A2] font-medium mb-10">
              {current.text}
            </p>
          </div>

          <div className="testimonial-profile flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Mobile Navigation */}
            <div className="flex  lg:hidden items-center gap-4">
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
