import Image from "next/image";
import { Button } from "./ui/button";
import BannerImg from "@/public/banner10.webp";
import Link from "next/link";
import { anton } from "@/lib/fonts";

const Banner = () => {
  return (
    <>
      <div className="w-full h-[600px] relative">
        <Image
          src={BannerImg}
          alt="banner"
          style={{ objectFit: "fill", objectPosition: "center" }}
          fill
          priority
        />
      </div>
      <div className="flex justify-center flex-col items-center p-2">
        <h1 className={`${anton.className} text-6xl md:text-9xl uppercase`}>
          Gear Up
        </h1>
        <p className="md:text-lg font-bold my-4 text-center">
          Shop the latest sportswear and equipment at unbeatable prices.
        </p>
        <Link href="/products">
          <Button className="rounded-full">Browse</Button>
        </Link>
      </div>
    </>
  );
};

export default Banner;
