interface ItemHeaderProps {
  name: string;
  price: number;
  gender: string;
}

const ItemHeader = ({ itemHeader }: { itemHeader: ItemHeaderProps }) => {
  return (
    <div className="flex flex-col font-semibold">
      <span className="text-2xl">{itemHeader.name}</span>
      <span className="mb-4">{itemHeader.gender}</span>
      <span>${itemHeader.price}</span>
    </div>
  );
};

export default ItemHeader;
