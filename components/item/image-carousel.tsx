import Image from "next/image";

const ImageCarousel = ({ image }: { image: string }) => {
  return (
    <div className="flex flex-col-reverse md:gap-2 col-span-2 h-[600px] md:flex-row md:sticky md:top-16">
      <div className="flex flex-row md:flex-col overflow-auto md:gap-4 flex-none">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            className="relative h-[150px] w-[200px] md:h-[170px] md:w-[150px] flex-shrink-0"
            key={index}
          >
            <Image
              src={image}
              alt={`image-${index}`}
              fill
              objectFit="fill"
              className="md:rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="relative w-full h-screen md:h-[600px]">
        <Image
          src={image}
          fill
          objectFit="fill"
          alt="large-image"
          className="md:rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
