import Image from "next/image";
import { Badge } from "../ui/badge";
import { getMostSellingProducts } from "@/app/admin/action";
import { anton } from "@/lib/fonts";

const MostSellingProducts = async () => {
  return (
    <div className="p-6">
      <div className="text-center">
        <span className={`text-2xl ${anton.className}`}>
          Most Selling Products
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <Products />
      </div>
    </div>
  );
};

const Products = async () => {
  const products = await getMostSellingProducts();
  return (
    <>
      {products.map((product) => (
        <div className="flex gap-4" key={product.id}>
          <div className="w-16 h-16 flex-shrink-0">
            <div className="relative w-full h-full">
              <Image
                src={product.image!}
                alt={product.name!}
                fill
                className="rounded-md"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col">
              <span className="text-xl">{product.name}</span>
              <span className="opacity-50">ID: {product.id}</span>
            </div>
            <div className="flex items-start">
              <Badge variant="secondary" className="text-md">
                {product.totalQuantity} Sales
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MostSellingProducts;
