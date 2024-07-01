"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ItemProps } from "@/lib/definition";
import Link from "next/link";
import Image from "next/image";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<ItemProps[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const fetchSuggestions = useCallback(async () => {
    if (query.length > 2) {
      try {
        const response = await axios.post<ItemProps[]>(
          `/api/autocomplete`,
          { query: query },
          { headers: { "Content-Type": "application/json" } }
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  }, [query]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, fetchSuggestions]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    if (query.length > 2) {
      fetchSuggestions();
    }
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={handleFocus}
        className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <MagnifyingGlassIcon className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
      {suggestions.length > 0 && (
        <ul className="absolute -left-12 md:-left-60 bg-white mt-2 z-10 w-screen md:w-[500px] md:border h-[350px] overflow-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="p-2 cursor-pointer hover:bg-gray-200 flex items-center gap-2"
            >
              <div className="relative w-[70px] h-[70px]">
                <Image src={suggestion.image} fill alt={suggestion.name} />
              </div>
              <Link href={`/products/${suggestion.id}`} className="block">
                <div>{suggestion.name}</div>
                <div>${suggestion.price}</div>
                <div className="text-sm text-gray-600">
                  {suggestion.category}, {suggestion.brand}, {suggestion.gender}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
``;
