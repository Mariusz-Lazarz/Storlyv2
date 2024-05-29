import { IoIosHeartEmpty } from "react-icons/io";
import { useSession } from "next-auth/react";
const FavouritesButton = () => {
  const { data: session } = useSession();
  return <>{session && <IoIosHeartEmpty className="h-6 w-6" />}</>;
};

export default FavouritesButton;
