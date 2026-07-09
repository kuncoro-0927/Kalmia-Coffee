import MenuCard from "../ui/MenuCard";
import { Menu } from "../../data/Menu";
const Product = () => {
  return (
    <section className="p-24">
      <div className="flex items-center justify-between">
        <h2 className="text-6xl font-semibold text-[#1746A2]">
          Explore Our Product
        </h2>
        <h2 className="text-6xl font-semibold text-[#1746A2]">/2026</h2>
      </div>
      <div className="mt-12 text-[#1746A2] font-medium">
        <ul className="flex items-center gap-4">
          <li className="bg-[#1746A2] text-white px-4 py-2 rounded-4xl">
            Coffee
          </li>
          <li>Signatures</li>
          <li>Chocolate</li>
          <li>Refreshes</li>
          <li>Teas</li>
        </ul>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-8 w-full">
        {Menu.map((item, index) => (
          <div key={item.id}>
            <MenuCard item={item} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
