"use client";
import useCartStore from "@/lib/store";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

const CartItems = () => {
  const cart = useCartStore((state) => state.cartItems);
  const remove = useCartStore((state) => state.remove);
  const changeQuantity = useCartStore((state) => state.changeQuantity);
  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold">My Bag</h1>
      <div className="w-full h-[1px] bg-gray-600 my-4"></div>
      <div className="flex flex-col gap-4 w-full h-[800px] overflow-auto">
        {cart.length === 0 ? (
          <div>No items in the cart...</div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex flex-row gap-2 w-full">
              <div className="relative w-[150px] h-[150px]">
                <Image src={item.image} fill alt={item.name} />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <span className="font-semibold text-xl">{item.name}</span>
                    <span className=" text-xl">
                      {item.gender}/{item.category}
                    </span>
                  </div>
                  <span className="font-semibold text-xl">${item.price}</span>
                </div>

                <div className="flex gap-4 justify-between">
                  <Select
                    defaultValue={
                      item.quantity > 10 ? "10" : String(item.quantity)
                    }
                    onValueChange={(value) =>
                      changeQuantity(item.id, Number(value))
                    }
                  >
                    <SelectTrigger className="w-[80px] shadow-none">
                      <SelectValue placeholder="Quantity" />
                    </SelectTrigger>
                    <SelectContent className="min-w-fit max-w-fit">
                      {Array.from({ length: 10 }).map((_, index) => (
                        <SelectItem key={index} value={String(index + 1)}>
                          {index + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    className="underline text-red-500 text-lg"
                    size="icon"
                    variant="outline"
                    onClick={() => remove(item.id)}
                  >
                    <TrashIcon width={20} height={20} />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartItems;
