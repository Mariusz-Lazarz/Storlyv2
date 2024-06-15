import { IoIosHeartEmpty } from "react-icons/io";
import { useSession } from "next-auth/react";
import Link from "next/link";
const FavouritesButton = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <Link href={"/favorite"}>
          <IoIosHeartEmpty className="h-6 w-6" />
        </Link>
      )}
    </>
  );
};

export default FavouritesButton;
