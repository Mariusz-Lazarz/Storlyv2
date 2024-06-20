"use client";

import useCartStore from "@/lib/store";
import PromoCodeInput from "./promo-code-input";
import { useState } from "react";
import CheckoutButton from "./checkout-button";

const Checkout = () => {
  const [isDiscount, setIsDiscount] = useState<number>(0);
  const setDiscountHandler = (value: number) => {
    setIsDiscount(value);
  };
  const cartItems = useCartStore((state) => state.cartItems);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = 10;
  const subtotal = total + deliveryFee;
  const discount = subtotal * (isDiscount / 100);
  const finalTotal = subtotal - discount;
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl font-semibold">Payment Info</h1>
      <div className="w-full h-[1px] bg-gray-600 my-4"></div>
      <span className="text-xl">Subtotal: ${total.toFixed(2)}</span>
      <span className="text-xl">Delivery: ${deliveryFee.toFixed(2)}</span>
      <span className="text-xl">Discount: ${discount.toFixed(2)}</span>
      <span className="text-xl">Total: ${finalTotal.toFixed(2)}</span>
      <PromoCodeInput setDiscount={setDiscountHandler} discount={isDiscount} />
      <div className="w-full h-[1px] bg-gray-600 my-4"></div>
      <CheckoutButton />
    </div>
  );
};

export default Checkout;
