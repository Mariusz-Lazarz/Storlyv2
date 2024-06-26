import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface MainBannerGridProps {
  items: {
    image: string;
    title: string;
    subTitle: string;
  }[];
}

const MainBannerGrid = ({ items }: MainBannerGridProps) => {
  return (
    <div className="grid md:grid-cols-2">
      {items.map((item, index) => (
        <div className="relative h-[700px]" key={index}>
          <Image
            fill
            src={item.image}
            alt={item.subTitle}
            style={{ objectFit: "fill" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 p-6">
            <div className=" flex flex-col gap-2">
              <span className="text-2xl text-white font-semibold">
                {item.subTitle}
              </span>
              <h1 className="text-white font-semibold text-4xl">
                {item.title}
              </h1>
            </div>
            <Link href="/products">
              <Button variant="secondary" className="rounded-full mt-4">
                Shop
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBannerGrid;
