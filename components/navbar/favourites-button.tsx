import { IoIosHeartEmpty } from "react-icons/io";
import { getServerUser } from "@/utils/authUtils";
const FavouritesButton = async () => {
  const user = await getServerUser();
  return <>{user && <IoIosHeartEmpty className="h-6 w-6" />}</>;
};

export default FavouritesButton;
