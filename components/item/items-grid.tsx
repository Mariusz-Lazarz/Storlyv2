"use client";
import Item from "./item";
import { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";
import Filter from "./filter";
import { ItemProps } from "@/lib/definition";
import { useSearchParams } from "next/navigation";
import LoadingSpinner from "../loading-spinner";

const ItemsGrid = () => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [didFetched, setDidFetched] = useState<boolean>(false);
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const handleFilterClick = (open: boolean) => {
    setIsFilterVisible(open);
  };

  const loadItems = useCallback(
    async (currentPage: number) => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${
            process.env.NEXT_PUBLIC_MY_API_BASE_URL
          }/api/products?page=${currentPage}&${searchParams.toString()}`
        );
        const newItems: ItemProps[] = res.data;

        if (newItems.length === 0) {
          setHasMore(false);
        } else {
          setItems((prevItems) =>
            currentPage === 0 ? newItems : [...prevItems, ...newItems]
          );
          setPage(currentPage + 1);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
        setDidFetched(true);
      }
    },
    [searchParams]
  );

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          loadItems(page);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, loadItems, page, hasMore]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setItems([]);
    setPage(0);
    setHasMore(true);
    loadItems(0);
  }, [loadItems]);

  return (
    <>
      <Filter
        isSticky={isSticky}
        itemsLength={items.length}
        isFilterVisible={isFilterVisible}
        onFilterClick={handleFilterClick}
      />
      {/* items grid */}
      {items.length > 0 && (
        <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
      {items.length === 0 && didFetched && (
        <div className="text-center text-4xl">No items found </div>
      )}
      <div ref={lastElementRef} />
      {isLoading && (
        <div className="h-screen w-full">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default ItemsGrid;
