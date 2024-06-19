import CartItems from "@/components/cart/cart-items";
import Checkout from "@/components/cart/checkout";

const CartPage = () => {
  return (
    <div className="container grid md:grid-flow-col md:grid-cols-6 gap-10 p-6">
      <div className="md:col-span-4">
        <CartItems />
      </div>
      <div className="md:col-span-2">
        <Checkout />
      </div>
    </div>
  );
};

export default CartPage;
