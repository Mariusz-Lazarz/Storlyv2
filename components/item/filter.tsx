"use client";

import { IoFilter } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Filter = ({
  isSticky,
  itemsLength,
  isFilterVisible,
  onFilterClick,
}: {
  isSticky: boolean;
  itemsLength: number;
  isFilterVisible: boolean;
  onFilterClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [sortValue, setSortValue] = useState<string | undefined>("featured");

  const sortBy = [
    { value: "max", text: "Max price" },
    { value: "min", text: "Min price" },
    { value: "newest", text: "Newest" },
    { value: "featured", text: "Featured" },
  ];

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    if (!searchParams.get("sort")) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sort", "featured");
      router.replace(`?${params.toString()}`);
    } else {
      setSortValue(searchParams.get("sort") || "featured");
    }
  }, [searchParams, router]);
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
        <Button
          variant="ghost"
          onClick={onFilterClick}
          className="flex flex-row items-center gap-2 cursor-pointer md:text-lg"
        >
          <span>{isFilterVisible ? "Hide" : "Show"} filters</span>
          <IoFilter />
        </Button>
        <Select
          onValueChange={(value) => handleSortChange(value)}
          value={sortValue}
          defaultValue="featured"
        >
          <SelectTrigger className="w-[140px] border-0 shadow-none md:text-lg">
            <SelectValue
              placeholder="Sort by"
              className="placeholder-text-lg"
            />
          </SelectTrigger>
          <SelectContent className="border-0 shadow-none">
            <SelectGroup>
              {sortBy.map((element, index) => (
                <SelectItem
                  value={element.value}
                  className="md:text-lg"
                  key={index}
                >
                  {element.text}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
