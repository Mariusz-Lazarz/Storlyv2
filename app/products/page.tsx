import ItemsGrid from "@/components/item/items-grid";
import axios from "axios";

const ProductsPage = async () => {
  const res = await axios.get("http://localhost:3000/api/test");
  const initialItems = await res.data;
  return <ItemsGrid initialItems={initialItems} />;
};

export default ProductsPage;
