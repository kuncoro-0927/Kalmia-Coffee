import { useRef } from "react";
import img from "../../assets/images/galeri1.jpg";
import caramel from "../../assets/images/contact.png";
import pattern from "../../assets/pattern.svg";
import { useContactAnimation } from "../../hooks/animations/useContact";

const Contact = () => {
  const contactRef = useRef(null);
  useContactAnimation(contactRef);

  return (
    <section
      ref={contactRef}
      className="flex flex-col-reverse lg:flex-row items-stretch 2xl:h-screen my-12 2xl:mt-24 overflow-hidden"
    >
      {/* LEFT */}
      <div className="contact-left relative w-full xl:w-1/2 h-[500px]  lg:h-[700px]">
        <img className="w-full h-full object-cover" src={img} alt="" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <img
          className="contact-cup absolute top-2 left-1/2 w-[250px] lg:w-[350px] -translate-x-1/2 object-contain"
          src={caramel}
          alt=""
        />

        <div className="contact-text absolute top-2/3 w-full max-w-xs left-1/2 -translate-x-1/2 xl:translate-y-1/5 text-white text-center flex flex-col items-center gap-4">
          <span>
            Sambil menikmati secangkir kopi, siapa tahu ceritamu hari ini jadi
            lebih hangat. Yuk, singgah sebentar.
          </span>

          <button className="w-fit bg-[#1746A2] px-4 py-2 rounded-4xl text-white font-medium cursor-pointer hover:-translate-y-1 duration-300 hover:bg-[#143b8a]">
            Kunjungi Kami
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="contact-right relative w-full xl:w-1/2 h-[500px] lg:h-[700px] overflow-hidden bg-[#F4B342] px-6 py-12 sm:px-12 xl:p-12">
        {/* Decorative Icons */}
        <div className="contact-pattern pointer-events-none absolute inset-0">
          <img
            src={pattern}
            alt="Pattern"
            className="absolute left-1/2 bottom-5 -translate-x-1/2 opacity-40 w-[90%] max-w-[700px]"
          />
        </div>

        {/* Heading */}
        <h2 className="relative z-10 text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-[#1746A2]/30">
          Apapun cerita hari ini, ada{" "}
          <span className="text-[#1746A2]">tempat hangat</span> menantimu di
          sini.
        </h2>
      </div>
    </section>
  );
};

export default Contact;
