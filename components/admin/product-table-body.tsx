import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getProducts } from "@/app/admin/action";
import DeleteButton from "./delete-button";

interface TableProductProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const ProductTableBody = async ({
  page,
  query,
}: {
  page: number;
  query: string;
}) => {
  const products = await getProducts(page, query);
  return (
    <div className="overflow-auto">
      {products.map((product: TableProductProps) => (
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
            <DeleteButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTableBody;
