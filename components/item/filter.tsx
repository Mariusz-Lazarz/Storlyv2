"use client";

import { IoFilter } from "react-icons/io5";
import Sort from "./sort";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import FilterAccordion from "./filter-accordion";

const Filter = ({
  isSticky,
  itemsLength,
  isFilterVisible,
  onFilterClick,
}: {
  isSticky: boolean;
  itemsLength: number;
  isFilterVisible: boolean;
  onFilterClick: (open: boolean) => void;
}) => {
  return (
    <div
      className={`flex justify-between items-center p-4 transition-all duration-500 ease-in-out z-50 ${
        isSticky
          ? "fixed top-14 w-full h-14 bg-white shadow-lg"
          : "h-16 bg-white"
      }`}
    >
      <div>
        <span
          className={`font-semibold drop-shadow-lg transition-all duration-300 ease-in-out ${
            isSticky ? "text-sm md:text-xl" : "text-md md:text-3xl"
          }`}
        >
          Records ({itemsLength})
        </span>
      </div>
      <div className="flex gap-4">
        <Drawer onOpenChange={onFilterClick}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              className="flex flex-row items-center gap-2 cursor-pointer md:text-lg"
            >
              <span>{isFilterVisible ? "Hide" : "Show"} filters</span>
              <IoFilter />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="w-2/3 lg:w-1/4 h-full rounded-none flex justify-center">
            <DrawerHeader>
              <DrawerTitle className="text-center text-3xl">
                Filter you items
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-4">
              <FilterAccordion />
            </div>
            <DrawerFooter>
              <DrawerClose></DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Sort />
      </div>
    </div>
  );
};

export default Filter;
