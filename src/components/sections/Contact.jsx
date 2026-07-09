import img from "../../assets/images/galeri1.jpg";
import caramel from "../../assets/images/contact.png";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";
import icon6 from "../../assets/icons/icon6.png";
import icon7 from "../../assets/icons/icon7.png";

const Contact = () => {
  return (
    <section className="flex items-stretch h-screen my-24">
      <div className="relative w-1/2 h-full">
        <img className="w-full h-full object-cover" src={img} alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <img
          className="absolute top-1/3 left-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 object-contain"
          src={caramel}
          alt=""
        />

        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 translate-y-1/5 text-white text-center flex flex-col items-center gap-4">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos
            commodi ab velit cum.
          </span>
          <button className="w-fit bg-white px-4 py-2 rounded-4xl text-[#363636] font-medium">Get Started</button>
        </div>
      </div>
      <div className="relative w-1/2 overflow-hidden bg-[#F4B342] p-12">
        {/* background decorative icons */}
        <div className="pointer-events-none absolute inset-0 ">
          <img
            src={icon1}
            className="absolute bottom-32 opacity-40 left-8 w-20 -rotate-6"
            alt=""
          />
          <img
            src={icon2}
            className="absolute bottom-10 opacity-40 left-35 w-20 rotate-12"
            alt=""
          />
          <img
            src={icon3}
            className="absolute bottom-35 opacity-40 right-10 w-20 rotate-3"
            alt=""
          />
          <img
            src={icon4}
            className="absolute bottom-30 opacity-40 left-55 w-20 -rotate-12"
            alt=""
          />
          <img
            src={icon5}
            className="absolute bottom-6 opacity-40 right-56 w-20 rotate-6"
            alt=""
          />
          <img
            src={icon6}
            className="absolute bottom-6 opacity-40 right-24 w-20 -rotate-6"
            alt=""
          />
          <img
            src={icon7}
            className="absolute bottom-6 opacity-40 left-76 w-20 -rotate-6"
            alt=""
          />
        </div>

        {/* konten asli */}
        <h2 className="relative z-10 text-6xl font-semibold leading-tight text-[#1746A2]/30">
          Lorem ipsum dolor, sit{" "}
          <span className="text-[#1746A2]">amet consectetur</span> adipisicing
          elit. Voluptate tenetur expedita atque!
        </h2>
      </div>
    </section>
  );
};

export default Contact;
