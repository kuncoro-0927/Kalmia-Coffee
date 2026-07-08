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
        <span className="text-xl font-medium text-[#1746A2]">
          1.400+ Satisfied Customers
        </span>
        <span className="text-left text-black font-medium">
          From morning coffee runs to afternoon catch-ups, our handcrafted
          drinks have become a favorite choice for coffee lovers seeking quality
          and comfort.
        </span>
      </div>
    </div>
  );
};

export default SocialCard;
