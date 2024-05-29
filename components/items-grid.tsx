import Item from "./item";

const ItemsGrid = () => {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 p-4">
      {Array.from({ length: 10 }).map((x, index) => (
        <Item key={index} />
      ))}
    </div>
  );
};

export default ItemsGrid;
