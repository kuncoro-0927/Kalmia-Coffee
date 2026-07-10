import { Customers } from "../../data/Customers";

const SocialCard = () => {
  return (
    <div className="max-w-sm w-fit flex flex-col items-start gap-y-4 ">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-3">
          {Customers.map((item) => (
            <img
              key={item.id}
              src={item.avatar}
              alt={item.name}
              className="w-10 h-10 rounded-full border border-white object-cover"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <span className="font-bold text-[#1746A2]">
          1.400+ Pelanggan Telah Berkunjung
        </span>

        <span className="text-left font-medium">
          Dari pagi yang sibuk hingga sore yang santai, Kalmia Coffee hadir
          sebagai tempat untuk menikmati kopi, berbincang, atau sekadar
          beristirahat sejenak.
        </span>
      </div>
    </div>
  );
};

export default SocialCard;
