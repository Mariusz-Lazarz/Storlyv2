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

interface ItemsCarouselProps {
  title: string;
}

const ItemsCarousel = ({ title }: ItemsCarouselProps) => {
  return (
    <div className="w-full max-w-full flex justify-center items-center">
      <Carousel className="my-12 relative w-screen">
        <div className="absolute flex -top-2 left-0  space-x-2 transform -translate-y-full">
          <h1 className="font-semibold text-3xl">{title}</h1>
        </div>
        <div className="absolute hidden md:flex -top-5 right-14  space-x-2 transform -translate-y-full">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent className="p-2 md:p-0 ">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3 p-2"
            >
              <div className="relative w-full h-[450px] md:h-[600px]">
                <Image
                  fill
                  src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_750,c_limit/f818f4d2-0051-40cb-8d6a-7f1799a5057a/image.jpg"
                  alt={`Carousel image ${index}`}
                  style={{ objectFit: "cover" }}
                />
                <Link href="/airforce">
                  <Button
                    className="absolute left-10 bottom-10 rounded-full"
                    variant="secondary"
                  >
                    Air force 1
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
