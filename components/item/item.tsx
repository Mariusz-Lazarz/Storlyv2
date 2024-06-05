import Image from "next/image";
import Link from "next/link";

interface ItemProp {
  item: {
    name: string;
    category: string;
    gender: string;
    brand: string;
    price: number;
    image: string;
    id: string;
  };
}

const Item = ({ item }: ItemProp) => {
  return (
    <Link href={`/products/${item.id}`}>
      <div className="hover:cursor-pointer">
        <div className="relative w-full h-48 md:h-72 lg:h-96 shadow-md transition-all duration-300 hover:scale-105">
          <Image
            src={item.image}
            fill
            style={{ objectFit: "fill" }}
            alt="image"
          />
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-orange-700 font-semibold">Bestseller</span>
          <span className="font-bold">{item.name}</span>
          <span className="font-semibold text-gray-400">{item.brand}</span>
          <span className="font-semibold">${String(item.price)}</span>
        </div>
      </div>
    </Link>
  );
};

export default Item;
