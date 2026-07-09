import { IoIosCall, IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="px-24 py-12  text-[#1746A2]">
      <div className="flex items-end justify-between border-b pb-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Kalmia Coffee</h3>
          <span className="text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <p className="max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            soluta eveniet. Culpa veniam officiis sint.
          </p>
          <ul className="mt-6 flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <IoIosCall className="text-2xl" />
              081937842324
            </li>
            <li className="flex items-center gap-2">
              <IoIosMail className="text-2xl" />
              kalmiacoffee@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow Our Media Social</h4>
          <ul className="mt-6 uppercase flex items-center gap-6 font-semibold">
            <li>Instagram</li>
            <li>Tiktok</li>
            <li>X</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      <div className="flex  items-center justify-between pt-6">
        <span>Pacitan, Jawa Timur</span>
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
    </footer>
  );
};

export default Footer;
