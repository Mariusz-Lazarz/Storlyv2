"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Cross1Icon } from "@radix-ui/react-icons";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import Link from "next/link";
import { GENDER_CATEGORIES, PRODUCT_CATEGORIES } from "@/lib/variables";
import MainLogo from "./logo";

type ProductCategory = {
  category: string;
  subCategory: string[];
};

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSecondSubMenuOpen, setIsSecondSubMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory | null>(null);
  // const [gender, setGender] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsSubMenuOpen(false);
    setIsSecondSubMenuOpen(false);
  };

  const openSubMenu = (gender: string) => {
    setIsSubMenuOpen(true);
    setIsSecondSubMenuOpen(false);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
    setIsSecondSubMenuOpen(false);
  };

  const openSecondSubMenu = (category: any) => {
    setSelectedCategory(category);
    setIsSecondSubMenuOpen(true);
  };

  const closeSecondSubMenu = () => {
    setIsSecondSubMenuOpen(false);
  };

  const closeAll = () => {
    setIsOpen(false);
    setIsSubMenuOpen(false);
    setIsSecondSubMenuOpen(false);
  };

  return (
    <div className="block md:hidden mr-2">
      <RxHamburgerMenu
        className="md:hidden w-6 h-6 cursor-pointer"
        onClick={toggleMenu}
      />
      <div
        className={`bg-white z-50 p-6 space-y-4 w-screen h-screen absolute top-0 left-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MainLogo />
        <Cross1Icon
          className="w-6 h-6 cursor-pointer ml-auto"
          onClick={toggleMenu}
        />
        <div className="flex flex-col gap-4">
          {GENDER_CATEGORIES.map((gender, index) => (
            <span
              className="text-3xl flex items-center cursor-pointer w-full"
              key={`${gender}-${index}`}
              onClick={() => openSubMenu(gender)}
            >
              {gender}
              <TfiAngleRight className="w-6 h-6 ml-auto" />
            </span>
          ))}
        </div>
      </div>

      <div
        className={`bg-white z-50 p-6 space-y-4 w-screen h-screen absolute top-0 right-0 transition-transform duration-300 ${
          isSubMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span
          className="flex items-center text-lg cursor-pointer gap-2"
          onClick={closeSubMenu}
        >
          <TfiAngleLeft className="w-4 h-4" />
          Back
        </span>
        <div className="flex flex-col gap-4">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <span
              className="text-3xl flex items-center cursor-pointer w-full"
              key={`${category.category}-${index}`}
              onClick={() => openSecondSubMenu(category)}
            >
              {category.category}
              <TfiAngleRight className="w-6 h-6 ml-auto" />
            </span>
          ))}
        </div>
      </div>

      <div
        className={`bg-white z-50 p-6 space-y-4 w-screen h-screen absolute top-0 left-0 transition-transform duration-300 ${
          isSecondSubMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span
          className="flex items-center text-lg cursor-pointer gap-2"
          onClick={closeSecondSubMenu}
        >
          <TfiAngleLeft className="w-4 h-4" />
          Back
        </span>
        <div className="flex flex-col gap-4">
          {selectedCategory &&
            selectedCategory.subCategory.map((subCategory, index) => (
              <Link
                href="/products"
                className="text-2xl flex items-center w-full"
                key={`${subCategory}-${index}`}
                onClick={closeAll}
              >
                {subCategory}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
