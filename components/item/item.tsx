import { ItemProps } from "@/lib/definition";
import Image from "next/image";
import Link from "next/link";


const Item = ({ item }: { item: ItemProps }) => {
  return (
    <Link href={`/products/${item.id}`}>
      <div className="hover:cursor-pointer">
        <div className="relative w-full h-48 md:h-72 lg:h-96 shadow-md transition-all duration-300 hover:scale-105">
          <Image
            src={item.image}
            fill
            style={{ objectFit: "fill" }}
            alt="image"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-orange-700 font-semibold">Bestseller</span>
          <span className="font-bold">{item.name}</span>
          <span className="font-semibold text-gray-400">
            {item.brand
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </span>
          <span className="font-semibold">${String(item.price)}</span>
        </div>
      </div>
    </Link>
  );
};

export default Item;
