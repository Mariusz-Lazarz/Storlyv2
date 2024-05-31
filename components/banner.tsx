import Image from "next/image";
import { Button } from "./ui/button";
import BannerImg from "@/public/banner10.webp";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full">
      <div className="w-full h-[700px]">
        <Image
          src={BannerImg}
          alt="banner"
          style={{ objectFit: "fill", objectPosition: "center" }}
          fill
        />
      </div>
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white bg-black bg-opacity-50 p-2 md:p-4 rounded max-w-[300px] md:max-w-[700px]">
        <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-widest">
          Gear Up for the Season!
        </h2>
        <p className="text-sm md:text-lg font-bold my-4">
          Shop the latest sportswear and equipment at unbeatable prices.
        </p>
        <Link href="/products">
          <Button variant="secondary" className="rounded-full">
            Browse
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
