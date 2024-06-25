import { IoBagOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { useToast } from "../ui/use-toast";
import Link from "next/link";
import useCartStore from "@/lib/store";
import { useEffect, useState } from "react";

const CartButton = () => {
  const { toast } = useToast();
  const { data: session } = useSession();

  const cartItems = useCartStore((state) => state.cartItems);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    if (!session) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please login to get started!",
      });
    }
  };

  // Sum the quantities of all items in the cart
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    if (cartItemCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [cartItemCount]);

  return (
    <>
      <Link href={"/cart"}>
        <div className={`relative ${animate ? "animate-ping" : ""}`}>
          <IoBagOutline
            className={`h-[26px] w-[26px] cursor-pointer `}
            onClick={handleClick}
          />
          {cartItemCount > 0 && (
            <span className="absolute inset-0 flex items-center top-1 justify-center text-xs font-bold text-black">
              {cartItemCount > 9 ? "9+" : cartItemCount}
            </span>
          )}
        </div>
      </Link>
    </>
  );
};

export default CartButton;
