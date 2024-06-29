import { Button } from "../ui/button";
import useCartStore from "@/lib/store";
import axios from "axios";
import getStripe from "@/utils/get-stripejs";
import { useState } from "react";

const CheckoutButton = ({
  deliveryFee,
  discount,
}: {
  deliveryFee: number;
  discount: number;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const cartItems = useCartStore((state) => state.cartItems);

  const submitCheckoutHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/checkout_sessions", {
        cartItems,
        deliveryFee,
        discount,
      });
      const checkoutId = response.data.id;
      const stripe = await getStripe();

      const { error }: any = await stripe?.redirectToCheckout({
        sessionId: checkoutId,
      });

      if (error) {
        console.error(error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className="w-full rounded-none py-6 uppercase"
      onClick={submitCheckoutHandler}
      disabled={loading || cartItems.length === 0}
    >
      {loading ? "Loading..." : "Checkout"}
    </Button>
  );
};

export default CheckoutButton;
