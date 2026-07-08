import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryColumns } from "../../data/Gallery";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".gallery-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      },
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="px-6 sm:px-12 lg:px-24 py-12">
      <h2 className="text-6xl font-semibold text-[#1746A2]">
        Explore Our Product
      </h2>
      <div
        ref={containerRef}
        className="mt-10 flex flex-col sm:flex-row gap-6 items-start"
      >
        {galleryColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6 flex-1 w-full">
            {column.map((item) => (
              <div
                key={item.id}
                className="gallery-item flex flex-col group cursor-pointer"
              >
                <div
                  className="overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-800"
                  style={{ height: item.height }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full rounded-2xl object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex justify-between items-center mt-3 text-sm text-[#1746A2] font-semibold tracking-wide">
                  <span>Gallery</span>
                  <span className="font-mono">
                    /{String(item.id).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
