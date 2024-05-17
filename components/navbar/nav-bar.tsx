import MainLogo from "./logo";
import { NavMenu } from "./nav-menu";
import BurgerMenu from "./burger-menu";
import SearchBar from "./search-bar";
import UserButton from "./user-button";
import CartButton from "./cart-button";
import FavouritesButton from "./favourites-button";

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
          <SearchBar />
          <UserButton />
          <CartButton />
          <FavouritesButton />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
