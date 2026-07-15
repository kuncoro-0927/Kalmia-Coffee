import { useState, useRef } from "react";
import MenuCard from "../ui/MenuCard";
import { Menu } from "../../data/Menu";
import { useProductAnimation } from "../../hooks/animations/useProduct";

const categories = [
  "Espresso Based",
  "Signature Coffee",
  "Non Coffee",
  "Refreshment",
  "Pastry & Dessert",
];

const Product = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredMenu = Menu.filter((item) => item.category === activeCategory);
  const productRef = useRef(null);
  useProductAnimation(productRef);

  return (
    <section ref={productRef} className="px-6 py-12 sm:px-12 xl:px-24 xl:py-24">
      <div className="flex items-start justify-between">
        <h2 className="product-heading text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1746A2]">
          Jelajahi Menu Kami
        </h2>
        <span className="product-heading text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1746A2]">
          /2026
        </span>
      </div>

      <div className="mt-6 xl:mt-12">
        <ul className="flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`product-filter-item cursor-pointer rounded-full px-4 py-2 transition-all ${
                activeCategory === category
                  ? "bg-[#1746A2] text-white"
                  : "text-[#1746A2] hover:bg-[#1746A2]/10"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {filteredMenu.map((item, index) => (
          <div key={item.id} className="product-card-item">
            <MenuCard item={item} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
