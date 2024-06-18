"use client";

import { ItemProps } from "@/lib/definition";
import { Button } from "../ui/button";
import useCartStore from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";

const AddToCart = ({ item }: { item: ItemProps }) => {
  const { toast } = useToast();
  const add = useCartStore((state) => state.add);
  const handleAddClick = () => {
    add({ ...item, quantity: 1 });
    toast({
      variant: "success",
      title: "Success!!",
      description: "Item added to a cart",
    });
  };
  return (
    <Button
      className="w-full rounded-full p-8 text-lg"
      onClick={handleAddClick}
    >
      Add to Bag
    </Button>
  );
};

export default AddToCart;
