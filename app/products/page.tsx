import ItemsGrid from "@/components/item/items-grid";
import { Suspense } from "react";

const ProductsPage = async () => {
  return (
    <Suspense fallback={<div className="text-6xl">Loading...</div>}>
      <ItemsGrid />
    </Suspense>
  );
};

export default ProductsPage;
