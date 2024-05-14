"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GENDER_CATEGORIES, PRODUCT_CATEGORIES } from "@/lib/variables";

const CategoryMenu = ({ genderCategory }: { genderCategory: string }) => {
  return PRODUCT_CATEGORIES.map((category, index) => (
    <div className="space-y-2" key={`${category.category}-${index}`}>
      <span className="font-semibold">{category.category}</span>
      <div>
        {category.subCategory.map((sub, subIndex) => (
          <NavigationMenuItem key={`${sub}-${subIndex}`}>
            <Link
              href={
                sub.startsWith("All")
                  ? `/products?gender=${genderCategory.toLowerCase()}&category=${category.category.toLowerCase()}`
                  : `/products?gender=${genderCategory.toLowerCase()}&category=${category.category.toLowerCase()}&subcategory=${sub.toLowerCase()}`
              }
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} opacity-50 hover:opacity-100`}
              >
                {sub}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </div>
    </div>
  ));
};

export const NavMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex gap-4">
        {GENDER_CATEGORIES.map((genderCategory, i) => (
          <NavigationMenuItem key={`${genderCategory}-${i}`}>
            <NavigationMenuTrigger className="text-lg">
              {genderCategory}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-screen">
                <div className="flex justify-center items-center gap-8 p-4">
                  <CategoryMenu genderCategory={genderCategory} />
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
