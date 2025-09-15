import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative -mt-16 h-[500px] w-full">
      <Image
        src="/home/home-banner.webp"
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
        className="absolute top-0 left-0"
        priority
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black/20"></div>
      <div
        className="absolute bottom-0 left-0 h-32 w-full"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-black-100), transparent)",
        }}
      ></div>
    </div>
  );
}
