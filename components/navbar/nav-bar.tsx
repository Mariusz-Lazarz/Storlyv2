import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import MainLogo from "./logo";
import { NavMenu } from "./nav-menu";
import BurgerMenu from "./burger-menu";

const NavBar = () => {
  return (
    <header className="p-4 border-b-[1px]">
      <nav className="flex justify-between items-center w-full">
        {/* user logo */}
        <div className="hidden flex-1 md:flex justify-start items-center">
          <MainLogo />
        </div>
        {/* categories */}
        <div className="md:flex-1 flex justify-center items-center">
          <div className=" flex items-center">
            <NavMenu />
            <BurgerMenu />
          </div>
        </div>
        {/* user nav */}
        <div className="flex-1 flex justify-end items-center space-x-2">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <MagnifyingGlassIcon className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <IoPersonOutline className="h-6 w-6" />
          <IoIosHeartEmpty className="h-6 w-6" />
          <IoBagOutline className="h-6 w-6" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
