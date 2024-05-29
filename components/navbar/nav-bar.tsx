"use client";

import { useState, useEffect } from "react";
import MainLogo from "./logo";
import { NavMenu } from "./nav-menu";
import BurgerMenu from "./burger-menu";
import SearchBar from "./search-bar";
import UserButton from "./user-button";
import CartButton from "./cart-button";
import FavouritesButton from "./favourites-button";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-500 ease-in-out z-50 ${
        isSticky
          ? "fixed top-0 w-full h-14 bg-white shadow-lg"
          : "h-16 bg-white"
      }`}
    >
      <nav className="flex justify-between items-center w-full h-full p-4">
        <div className="hidden flex-1 md:flex justify-start items-center">
          <MainLogo isSticky={isSticky} />
        </div>
        <div className="md:flex-1 flex justify-center items-center">
          <div className="flex items-center">
            <NavMenu />
            <BurgerMenu />
          </div>
        </div>
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
