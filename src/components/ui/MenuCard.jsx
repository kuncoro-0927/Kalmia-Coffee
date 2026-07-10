const MenuCard = ({ item }) => {
  return (
    <div>
      <img
        className="w-full h-[200px] xl:h-[400px] object-cover rounded-2xl"
        src={item.image}
        alt=""
      />
      <div className="mt-6 flex flex-col gap-1 justify-center text-center text-[#1746A2]">
        <span className="uppercase font-bold">{item.name}</span>
        <span className="font-medium">{item.description}</span>
        <span className="font-bold">IDR {item.price}</span>
        <div className="my-2 flex items-center justify-center mx-auto border border-gray-300 w-16"></div>
        <span className="font-medium">{item.rating}/200 reviews</span>
      </div>
    </div>
  );
};

export default MenuCard;
