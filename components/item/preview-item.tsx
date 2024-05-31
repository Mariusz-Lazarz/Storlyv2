import Image from "next/image";
import { Button } from "../ui/button";
import { HeartIcon } from "@radix-ui/react-icons";

const PreviewItem = () => {
  return (
    <>
      <div className="container flex flex-col gap-10 md:px-48 md:grid md:grid-cols-3 md:gap-6 mt-10">
        <div className="flex flex-col-reverse gap-2 col-span-2 h-[600px] md:flex-row md:sticky md:top-16">
          <div className="overflow-auto flex flex-col gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <Image
                src="https://images.unsplash.com/photo-1617883861744-13b534e3b928?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ objectFit: "fill" }}
                alt="image"
                width={150}
                height={150}
                className="rounded-lg"
                key={index}
              />
            ))}
          </div>
          <div className="relative w-full h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1617883861744-13b534e3b928?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              style={{ objectFit: "fill" }}
              alt="image"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col col-span-1 gap-10">
          <div className="flex flex-col font-semibold">
            <span className="text-2xl">Tennis Rocket</span>
            <span className="mb-4">Woman</span>
            <span>$99,99</span>
          </div>
          <div>
            <div className="flex justify-between font-semibold mb-2">
              <span>Choose size</span>
              <span className="opacity-50">Size guide</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <Button variant="outline" key={index} className="p-6">
                  <span className="text-lg">{`EU ${36 + index}`}</span>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="w-full rounded-full p-8 text-lg">
              Add to Bag
            </Button>
            <Button
              className="w-full rounded-full  p-8 flex gap-2"
              variant="outline"
            >
              <span className="text-lg">Favorite</span>
              <span>
                <HeartIcon />
              </span>
            </Button>
          </div>
          <div className="flex flex-col">
            <span className="text-lg  font-semibold">Shipping</span>
            <span>Orders over $50 qualify for free shipping</span>
          </div>
          <div>
            <span className="underline">
              Pick up your order for free at any of our stores
            </span>
          </div>
          <div className="bg-gray-100 p-4">
            <span>
              Comprising at least 20% recycled components by weight, this
              product is eco-friendly
            </span>
          </div>
          <div>
            <p>
              Elevate your game with our premium sports gear! Explore our
              collection of high-quality equipment, apparel, and accessories
              designed to enhance your performance. From top-of-the-line
              clothing to specialized equipment and footwear, we have everything
              you need to excel in your sport. Browse now and gear up for
              success!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewItem;
