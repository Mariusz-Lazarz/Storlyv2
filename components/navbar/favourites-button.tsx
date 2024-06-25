import { IoIosHeartEmpty } from "react-icons/io";
import { useSession } from "next-auth/react";
import { useToast } from "../ui/use-toast";
import Link from "next/link";
const FavouritesButton = () => {
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
    <>
      <Link href={"/favorite"} onClick={handleClick}>
        <IoIosHeartEmpty className="h-[26px] w-[26px] cursor-pointer" />
      </Link>
    </>
  );
};

export default FavouritesButton;
