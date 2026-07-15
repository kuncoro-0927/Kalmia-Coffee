const MenuCard = ({ item }) => {
  return (
    <div>
      <img
        className="w-full h-[200px] sm:h-[300px] xl:h-[400px] object-cover rounded-2xl"
        src={item.image}
        alt=""
      />
      <div className="mt-6 flex flex-col gap-1 h-full  justify-between text-center text-[#1746A2]">
        <span className="uppercase font-bold">{item.name} (4.7)</span>
        <span className="font-medium">{item.description}</span>
        <span className="font-bold">IDR {item.price}</span>
        <div className="my-2 flex items-center justify-center mx-auto border border-gray-300 w-16"></div>
         <div className="mt-auto">
          <button className="rounded-full bg-[#1746A2] px-4 py-2 text-white font-medium text-sm cursor-pointer hover:-translate-y-1 duration-300 hover:bg-[#143b8a]">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
