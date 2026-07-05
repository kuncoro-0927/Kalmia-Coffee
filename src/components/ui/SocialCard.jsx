import { Customers } from "../../data/Customers";

const SocialCard = () => {
  return (
    <div className="max-w-sm p-7 w-fit flex flex-col items-start gap-y-4 rounded-4xl border-white/40 border-y bg-white/20 backdrop-blur-xs text-white overflow-hidden">
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
        <span className="font-medium text-black">1.400+ Satisfied Customers</span>
        <span className="text-left text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          labore cumque, eveniet temporibus tempore!
        </span>
      </div>
    </div>
  );
};

export default SocialCard;
