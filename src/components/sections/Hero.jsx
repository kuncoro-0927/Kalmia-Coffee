import heroimg from "../../assets/images/macchiato.png";
const Hero = () => {
  return (
    <section className="cloud-bg relative flex items-center justify-center min-h-screen overflow-hidden">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <div className="cloud-blob blob-1" />
      <div className="cloud-blob blob-2" />
      <div className="cloud-blob blob-3" />
      <div className="cloud-blob blob-4" />

      <div className="cloud-grain" />

      <svg
        className="cloud-line"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 Q300,20 600,110 T1200,90"
          stroke="rgba(120,150,180,0.4)"
          strokeWidth="1.5"
          strokeDasharray="2 7"
          fill="none"
        />
      </svg>

      <svg
        className="cloud-sparkle sparkle-1"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="#7A9AB8"
      >
        <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
      </svg>

      <svg
        className="cloud-sparkle sparkle-2"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="#7A9AB8"
      >
        <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold max-w-xs">
          Scaling Italian Coffee
        </h1>
        <span className="font-heading italic font-medium text-5xl max-w-xs text-[#00558e]">Excellence to The World</span>
        <img className="-mt-12 w-[300px] flex items-center justify-center rotate-8" src={heroimg} alt="" />

        <div className="mt-12 flex items-center gap-3">
          <button className="px-4 py-2 rounded-4xl bg-[#00558e] text-white font-normal">Pesan Sekarang</button>
            <button className="px-4 py-2 rounded-4xl bg-white text-[#00558e] font-normal">Reservasi</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
