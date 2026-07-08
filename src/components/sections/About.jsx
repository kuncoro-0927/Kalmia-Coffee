import about from "../../assets/images/shop.webp";
import { RiTargetFill, RiShieldCheckLine } from "react-icons/ri";
import { AiOutlineCoffee } from "react-icons/ai";
const About = () => {
  return (
    <section className="px-24 py-12">
      <div className="flex items-stretch justify-between gap-12">
        <div className="w-[50%] flex flex-col gap-2">
          <span className="text-[#1746A2]">Lorem ipsum dolor sit amet.</span>
          <h2 className="text-6xl font-semibold text-[#1746A2]">
            Kalmia Coffee tumbuh dari kecintaan terhadap kopi berkualitas.
          </h2>
          <p className="text-[#1746A2] font-medium mt-4">
            Berawal dari kecintaan terhadap kopi, kami menghadirkan minuman yang
            diracik dengan konsisten, dipadukan dengan ruang yang nyaman untuk
            bekerja, berbincang, maupun menikmati waktu sendiri.
          </p>
        </div>

        <div className="w-[50%] border-2 p-2 rounded-4xl border-gray-300">
          <img className="w-full h-full rounded-4xl" src={about} alt="" />
        </div>
      </div>

      <div className="mt-12 flex gap-4">
        <div className="flex-1 flex items-start gap-4 border border-gray-300 p-4 rounded-2xl">
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#1746A2] flex items-center justify-center">
            <RiTargetFill className="text-white text-xl" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1746A2]">Presisi</h3>
            <p className="font-medium text-[#1746A2]">
              Setiap minuman dibuat dengan standar yang konsisten.
            </p>
          </div>
        </div>

        <div className="flex-1 flex items-start gap-4 border border-gray-300 p-4 rounded-2xl">
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#1746A2] flex items-center justify-center">
            <RiShieldCheckLine className="text-white text-xl" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1746A2]">Kualitas</h3>
            <p className="font-medium text-[#1746A2]">
              Bahan yang dipilih dengan cermat untuk setiap sajian.
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-start gap-4 border border-gray-300 p-4 rounded-2xl">
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#1746A2] flex items-center justify-center">
            <AiOutlineCoffee className="text-white text-xl" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1746A2]">Suasana</h3>
            <p className="font-medium text-[#1746A2]">
              Ruang yang nyaman untuk bekerja maupun bersantai bersama orang
              terdekat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
