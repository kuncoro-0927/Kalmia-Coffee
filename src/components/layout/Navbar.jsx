// Navbar.jsx
const Navbar = () => {
  return (
    <nav className="grid grid-cols-[1fr_auto_1fr] items-center px-8 py-6 2xl:px-24 border-gray-200 border-b-2">
      <ul className="flex items-center gap-5 font-medium text-[#1746A2]">
        <li>Menu</li>
        <li>Tentang</li>
        <li>Galeri</li>
        <li>Ulasan</li>
      </ul>

      <span className="text-xl bg-white font-semibold justify-self-center">
        Kalmia Coffee
      </span>

      <div className="justify-self-end">
        <button className="px-4 py-2 rounded-full bg-[#1746A2] text-white">
          Pesan Sekarang
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
