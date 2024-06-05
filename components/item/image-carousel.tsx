import Image from "next/image";

const ImageCarousel = ({ image }: { image: string }) => {
  return (
    <div className="flex flex-col-reverse md:gap-2 col-span-2 h-[600px] md:flex-row md:sticky md:top-16">
      <div className="overflow-auto flex md:flex-col md:gap-2 h-[150px] md:h-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <Image
            src={image}
            style={{ objectFit: "fill" }}
            alt="image"
            width={150}
            height={150}
            className="md:rounded-lg"
            key={index}
          />
        ))}
      </div>
      <div className="relative w-full h-screen md:h-[600px]">
        <Image
          src={image}
          fill
          style={{ objectFit: "fill" }}
          alt="image"
          className="md:rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
