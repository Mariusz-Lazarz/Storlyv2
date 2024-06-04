import Image from "next/image";

const ImageCarousel = () => {
  return (
    <div className="flex flex-col-reverse md:gap-2 col-span-2 h-[600px] md:flex-row md:sticky md:top-16">
      <div className="overflow-auto flex md:flex-col md:gap-2 h-[150px] md:h-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <Image
            src="https://images.unsplash.com/photo-1617883861744-13b534e3b928?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
