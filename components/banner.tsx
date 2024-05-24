import Image from "next/image";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <div className="relative w-full">
      <div className="w-full h-[700px]">
        <Image
          src="/banner3.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white bg-black bg-opacity-50 p-2 md:p-4 rounded max-w-[300px] md:max-w-[700px]">
        <h2 className="text-4xl md:text-7xl font-extrabold uppercase">
          Gear Up for the Season!
        </h2>
        <p className="text-sm md:text-lg font-bold my-4">
          Shop the latest sportswear and equipment at unbeatable prices.
        </p>
        <Button variant="secondary" className="rounded-full">
          Browse
        </Button>
      </div>
    </div>
  );
};

export default Banner;
