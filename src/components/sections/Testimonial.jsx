import { TbStarFilled } from "react-icons/tb";
import { ImQuotesLeft } from "react-icons/im";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "Manage registrations, schedules, brackets, and live results seamlessly, helping organizers deliver exceptional tournament experiences.",
      name: "Darrell Steward",
      role: "Marketing Coordinator",
      avatar: "https://i.pravatar.cc/100?img=12",
      rating: 5,
    },
    {
      id: 2,
      text: "The dashboard is intuitive and saves us hours every week. Our team can finally focus on the event itself instead of admin work.",
      name: "Courtney Henry",
      role: "Event Manager",
      avatar: "https://i.pravatar.cc/100?img=32",
      rating: 5,
    },
    {
      id: 3,
      text: "Support team is responsive and the platform keeps improving. It has become a core part of how we run every tournament now.",
      name: "Jenny Wilson",
      role: "Operations Lead",
      avatar: "https://i.pravatar.cc/100?img=47",
      rating: 5,
    },
  ];
  const [active, setActive] = useState(0);

  const goPrev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const goNext = () =>
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const current = testimonials[active];

  return (
    <section className="p-24">
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-8 sm:gap-16">
        {/* Kolom kiri: kutip besar di atas, navigasi sejajar di bawahnya */}
        <div className="hidden sm:flex flex-col justify-between items-start h-full">
          <ImQuotesLeft
            className="w-24 h-24 text-[#1746A2]"
          />

          <div className="flex items-center gap-4">
            <button
              onClick={goPrev}
              aria-label="Sebelumnya"
              className="w-11 h-11 rounded-full bg-[#1746A2] text-white flex items-center justify-center hover:bg-[#2c4030] transition-colors"
            >
              <IoIosArrowBack className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
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

        <div>
          <h2 className="text-4xl sm:text-6xl font-semibold text-[#1746A2] mb-12">
            What Our Customer Says
          </h2>

          <hr className="border-t border-gray-300 mb-12" />

          <div className="flex gap-1 mb-4">
            {Array.from({ length: current.rating }).map((_, i) => (
              <TbStarFilled key={i} className="w-8 h-8 text-amber-400 fill-amber-400" />
            ))}
          </div>

          <p className="text-2xl sm:text-5xl leading-snug text-[#1746A2] font-medium mb-10">
            {current.text}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div className="flex sm:hidden items-center gap-4">
              <button
                onClick={goPrev}
                aria-label="Sebelumnya"
                className="w-11 h-11 rounded-full bg-[#1F2E23] text-white flex items-center justify-center hover:bg-[#2c4030] transition-colors"
              >
                <IoIosArrowForward className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Ke testimoni ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === active ? "bg-[#1F2E23]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                aria-label="Selanjutnya"
                className="w-11 h-11 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <IoIosArrowForward className="w-5 h-5" />
              </button>
            </div>

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
