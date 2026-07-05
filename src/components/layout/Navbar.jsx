// Navbar.jsx
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6">
      <span className="text-xl font-semibold">Kalmia Coffee</span>
      <button className="px-4 py-2 rounded-4xl bg-[#00558e] text-white font-normal">
        Pesan Sekarang
      </button>
    </nav>
  );
};

export default Navbar;