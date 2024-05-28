"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const INFO = [
  {
    title: "Summer promotion get 25% discount",
    description: "Spend over 200$ and enter the code SUMMER",
  },
  {
    title: "Free Shipping and Returns",
    description: "Get 30 Days of Free Returns",
  },
  {
    title: "Loyalty Program",
    description:
      "Earn points on every purchase and get exclusive rewards. Sign up and get 100 bonus points!",
  },
];

const InfoBanner = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center p-4">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {INFO.map((item, index) => (
            <CarouselItem key={item.title + index}>
              <div className="text-center">
                <p className="uppercase font-bold text-sm">{item.title}</p>
                <p className="text-xs">{item.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default InfoBanner;
