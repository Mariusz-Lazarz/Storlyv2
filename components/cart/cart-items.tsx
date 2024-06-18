"use client";
import useCartStore from "@/lib/store";

const CartItems = () => {
  const cart = useCartStore((state) => state.cartItems);
  return (
    <div>
      {cart.map((item, index) => (
        <div key={index}>{JSON.stringify(item)}</div>
      ))}
    </div>
  );
};

export default CartItems;
