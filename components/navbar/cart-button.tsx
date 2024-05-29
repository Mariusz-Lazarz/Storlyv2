import { IoBagOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";

const CartButton =  () => {
  const { data: session } = useSession();
  return <>{session?.user && <IoBagOutline className="h-6 w-6" />}</>;
};

export default CartButton;
