import { useRef } from "react";
import logo from "../../assets/logo-blue.svg";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { useFooterAnimation } from "../../hooks/animations/useFooter";
const Footer = () => {
  const footerRef = useRef(null);
  useFooterAnimation(footerRef);

  return (
    <footer ref={footerRef} className="px-6 sm:px-12 xl:px-24 py-12">
      <div className="flex flex-col gap-y-12 lg:gap-y-0 lg:flex-row items-start lg:items-end justify-between border-b pb-12">
        {/* Left */}
        <div className="footer-left flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={logo} className="w-6" alt="" />
            <h3 className="text-xl font-bold">Kalmia Coffee</h3>
          </div>

          <span className="text-4xl font-semibold">
            Sampai jumpa di cerita berikutnya.
          </span>

          <p className="max-w-md">
            Entah cerita bahagia atau sekadar mencari waktu untuk diri sendiri,
            Kalmia Coffee selalu punya tempat dan secangkir kopi untukmu.
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

        {/* Right */}
        <div className="footer-right">
          <h4>Follow Our Media Social</h4>

          <ul className="mt-6 uppercase flex items-center gap-6 font-semibold">
            <li>Instagram</li>
            <li>Tiktok</li>
            <li>X</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom flex flex-col lg:flex-row items-start lg:items-center justify-between pt-6">
        <span>Malang, Jawa Timur</span>
        <span>© 2026 Kalmia Coffee. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
