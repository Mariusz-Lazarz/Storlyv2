import Item from "./item";
import items from "@/public/products.json";

const ItemsGrid = async () => {
  console.log(items.length);
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 p-4">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemsGrid;
