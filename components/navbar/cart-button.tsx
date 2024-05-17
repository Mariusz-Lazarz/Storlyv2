import { IoBagOutline } from "react-icons/io5";
import { getServerUser } from "@/utils/authUtils";

const CartButton = async () => {
  const user = await getServerUser();
  return <>{user && <IoBagOutline className="h-6 w-6" />}</>;
};

export default CartButton;
