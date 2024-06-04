import { Button } from "../ui/button";

const AddToCart = ({ itemSize }: { itemSize: string }) => {
  return (
    <Button className="w-full rounded-full p-8 text-lg">Add to Bag</Button>
  );
};

export default AddToCart;
