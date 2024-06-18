import { IoBagOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

const CartButton = () => {
  const { toast } = useToast();
  const { data: session } = useSession();

  const handleClick = () => {
    if (!session) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please login to get started!",
      });
    }
  };

  return (
    <Link href={"/cart"}>
      <IoBagOutline className="h-6 w-6 cursor-pointer" onClick={handleClick} />
    </Link>
  );
};

export default CartButton;
