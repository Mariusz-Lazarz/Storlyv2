import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const INFO = [
  {
    title: "Summer promotion get 25% discount",
    description: "Spend over 200$ and enter the code SUMMER",
  },
  {
    title: "Free Shipping and Returns",
    description: "Get 30 Days of Free Returns",
  },
];

const InfoBanner = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center p-4">
      <Carousel>
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default InfoBanner;
