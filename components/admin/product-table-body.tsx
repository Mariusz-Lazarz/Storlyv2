import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TableProductsProps {
  products: {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
  }[];
}

const ProductTableBody = ({ products }: TableProductsProps) => {
  if (products.length === 0 || !products)
    return (
      <div className="w-full h-full flex justify-center items-center text-red-500 text-2xl">
        No products found
      </div>
    );
  return (
    <div className="overflow-auto">
      {products.map((product) => (
        <div className="p-4 grid grid-cols-5 text-center" key={product.id}>
          <div className="flex flex-row items-center gap-2 justify-start">
            <div className="relative w-12 h-12">
              <Image
                src={product.image!}
                alt={product.name!}
                fill
                className="rounded-md"
                loading="lazy"
              />
            </div>
            <span className="truncate">{product.id}</span>
          </div>
          <span className="text-center flex items-center justify-center">
            {product.name}
          </span>
          <span className="text-center flex items-center justify-center uppercase">
            {product.category}
          </span>
          <span className="text-center flex items-center justify-center">
            ${product.price}
          </span>
          <div className="flex flex-row items-center justify-center gap-2">
            <Button variant="outline">View</Button>
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTableBody;
