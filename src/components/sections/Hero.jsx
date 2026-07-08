import SocialCard from "../ui/SocialCard";
import hero from "../../assets/images/hero.webp";
import americano from "../../assets/images/americano.webp";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className="px-24 pb-12">
      <div className="flex items-start justify-between">
        <div className="py-12">
          <h1 className="text-8xl font-medium text-[#1746A2]">
            Fresh <br />{" "}
            <span className="ml-24 text-[#1746A2]/30">Pressed</span>
            <br /> Coffee
          </h1>
        </div>

        <div className="flex flex-col gap-24 border-l-2 border-gray-200 p-12">
          <span className="font-medium text-[#1746A2]">
          Crafted for Every Coffee Moment
          </span>
          <SocialCard />
        </div>
      </div>
      <div className="relative">
        <img className="rounded-4xl" src={hero} alt="Caramel Macchiato" />

        <div className="absolute top-6 left-6 flex flex-wrap gap-3 max-w-md">
          <span className="rounded-full px-4 py-1 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md">
            Caramel Macchiato
          </span>

          <span className="rounded-full px-4 py-1 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md">
            Vanilla Latte
          </span>

          <span className="rounded-full px-4 py-1 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md">
            Matcha Latte
          </span>

          <span className="rounded-full px-4 py-1 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md">
            Americano
          </span>
        </div>

        <div className="absolute bottom-6 left-6">
          <ul className="flex flex-col gap-2 rounded-full p-1 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md ">
            <li className="rounded-full flex items-center justify-center w-10 h-10 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md">
              <FaInstagram className="text-xl" />
            </li>
            <li className="rounded-full flex items-center justify-center w-10 h-10 text-white">
              <FaXTwitter className="text-xl" />
            </li>
            <li className="rounded-full flex items-center justify-center w-10 h-10 text-white ">
              <FaFacebook className="text-xl" />
            </li>
            <li className="rounded-full flex items-center justify-center w-10 h-10 text-white">
              <FaTiktok className="text-xl" />
            </li>
          </ul>
        </div>

        <div className="absolute bottom-6 right-6 2xl:max-w-md flex items-stretch gap-4 rounded-2xl p-3 border border-[#5F9DF7]/10 bg-[#5F9DF7]/20 backdrop-blur-xs text-white shadow-md ">
          <img
            className="w-[150px] h-[150px]  object-cover rounded-2xl"
            src={americano}
            alt=""
          />
          <div className="flex flex-col">
            <h4 className="font-medium text-lg">Americano</h4>

            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="mt-auto flex items-center justify-between">
              <span className="font-medium text-xl">IDR 14.000</span>
              <button className="bg-white px-4 py-2 rounded-full text-sm text-[#1746A2]">
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
