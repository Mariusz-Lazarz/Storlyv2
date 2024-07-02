import Image from "next/image";
import { Badge } from "../ui/badge";

const MostSellingProducts = () => {
  return (
    <div className="p-6">
      <div className="text-center">
        <span className="text-2xl">Most Selling Products</span>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        {/* Start of item */}
        <div className="flex gap-4">
          <div className="relative w-20 h-20">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
              fill
              className="rounded-md"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col">
              <span className="text-xl">Air Force 1</span>
              <span className="opacity-50">ID: 2105251085151</span>
            </div>
            <div className="flex items-start">
              <Badge variant="secondary" className="text-md">
                128 Sales
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostSellingProducts;
