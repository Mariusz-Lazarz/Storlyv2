"use client";

import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { anton } from "@/lib/fonts";
import { useState, useCallback, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface TableSearchProps {
  label: string;
  placeholder: string;
  button?: JSX.Element;
}

const TableSearchNav = ({ label, placeholder, button }: TableSearchProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      router.push(pathname + "?" + createQueryString("q", query));
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, createQueryString, pathname, router]);
  return (
    <div>
      <div className="p-4 flex flex-row justify-between items-center">
        <span className={`${anton.className} text-2xl uppercase`}>{label}</span>
        <div className="relative">
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={onChangeHandler}
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <MagnifyingGlassIcon className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
        </div>
        <div>{button}</div>
      </div>
      <div className="w-full h-[1px] bg-slate-300"></div>
    </div>
  );
};

export default TableSearchNav;
