import { useRef } from "react";
import { galleryColumns } from "../../data/Gallery";
import { useGalleryAnimation } from "../../hooks/animations/useGallery";
const Gallery = () => {
  const galleryRef = useRef(null);
  useGalleryAnimation(galleryRef);

  return (
    <section ref={galleryRef} className="px-6 py-12 sm:px-12 xl:p-24">
      <div className="gallery-heading">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1746A2] leading-tight">
          Melihat Kalmia Coffee <br /> Lebih Dekat
        </h2>

        <p className="font-medium">
          Sekilas tentang ruang, kopi, dan momen yang menjadi bagian dari Kalmia
          Coffee.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-start gap-6 lg:flex-row">
        {galleryColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex w-full flex-1 flex-col gap-6">
            {column.map((item) => (
              <div
                key={item.id}
                className="gallery-item group flex cursor-pointer flex-col"
              >
                <div
                  className="overflow-hidden rounded-2xl bg-gray-100"
                  style={{ height: item.height }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full rounded-2xl object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between text-sm font-semibold tracking-wide text-[#1746A2]">
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
