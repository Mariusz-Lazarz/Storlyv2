"use client";

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Button } from "../ui/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

const TablePagination = ({ count, page }: { count: number; page: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const nextPageHandler = () => {
    setIsLoading(true);
    router.push(pathname + "?" + createQueryString("page", String(page + 1)));
  };

  const previousPageHandler = () => {
    setIsLoading(true);
    router.push(pathname + "?" + createQueryString("page", String(page - 1)));
  };

  useEffect(() => {
    setIsLoading(false);
  }, [page]);

  const totalPages = count / 10;

  return (
    <div className="mt-auto">
      <div className="w-full h-[1px] bg-slate-300"></div>
      <div className="p-4 flex flex-row justify-between items-center">
        <Button
          variant="outline"
          className="flex flex-row items-center justify-center"
          onClick={previousPageHandler}
          disabled={page <= 1 || isLoading}
        >
          <MdOutlineKeyboardArrowLeft className="h-[20px] w-[20px]" />
          <span>Previous</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-row items-center justify-center"
          onClick={nextPageHandler}
          disabled={page >= totalPages || isLoading}
        >
          <span>Next</span>
          <MdOutlineKeyboardArrowRight className="h-[20px] w-[20px]" />
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;
