import { Button } from "../ui/button";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { anton } from "@/lib/fonts";

interface ItemsCarouselProps {
  title: string;
  items: { image: string; category?: string; id?: string }[];
  variant: "horizontal" | "vertical";
}

const horizontal = "h-[250px] md:h-[400px]";
const vertical = "h-[450px] md:h-[550px]";

const ItemsCarousel = ({ title, items, variant }: ItemsCarouselProps) => {
  return (
    <div className="w-full max-w-full flex justify-center items-center px-2 md:px-16  mt-10">
      <Carousel className="my-12 relative w-screen">
        <div className="absolute flex -top-2 left-0  space-x-2 transform -translate-y-full">
          <h1 className={`${anton.className} text-5xl uppercase`}>{title}</h1>
        </div>
        <div className="absolute hidden md:flex -top-5 right-14  space-x-2 transform -translate-y-full">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3 p-2"
            >
              <div
                className={`relative w-full ${
                  variant === "horizontal" ? horizontal : vertical
                }`}
              >
                <Image
                  fill
                  src={item.image}
                  alt={`Carousel image ${index}`}
                  style={{ objectFit: "fill" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Link href={item.id ? `/products/${item.id}` : "/products"}>
                  <Button
                    className="absolute left-10 bottom-10 rounded-full font-bold"
                    variant="secondary"
                  >
                    {item.category ? item.category : "Discover"}
                  </Button>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ItemsCarousel;
