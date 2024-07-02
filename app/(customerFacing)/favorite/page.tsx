"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { ItemProps } from "@/lib/definition";
import axios from "axios";
import LoadingBar from "@/components/loading-bar";

import Item from "@/components/item/item";
const FavoritePage = () => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [didFetched, setDidFetched] = useState<boolean>(false);

  const loadItems = useCallback(async (currentPage: number) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_MY_API_BASE_URL}/api/favorites?page=${currentPage}`
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
  }, []);

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
    setItems([]);
    setPage(0);
    setHasMore(true);
    loadItems(0);
  }, [loadItems]);
  return (
    <>
      {items.length > 0 && (
        <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
      {items.length === 0 && didFetched && (
        <div className="text-center text-4xl mt-10">No items found </div>
      )}
      <div ref={lastElementRef} />
      {isLoading && <LoadingBar />}
    </>
  );
};

export default FavoritePage;
