import Image from "next/image";

import BannerImg from "@/public/banner10.webp";

const Banner = () => {
  return (
    <div className="w-full h-[650px] relative">
      <Image
        src="https://images.unsplash.com/flagged/photo-1565106305412-e8cab493e15e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner"
        style={{ objectFit: "fill", objectPosition: "center" }}
        fill
        priority
      />
    </div>
  );
};

export default Banner;
