"use client";
import Item from "./item";
import { useState, useRef, useCallback } from "react";
import axios from "axios";
import LoadingBar from "../loading-bar";
import { Button } from "../ui/button";

interface ItemProps {
  id: string;
  name: string;
  image: string;
  brand: string;
  gender: string;
  category: string;
  price: number;
}

interface ItemsGridProps {
  initialItems: ItemProps[];
}

const ItemsGrid = ({ initialItems }: ItemsGridProps) => {
  const [items, setItems] = useState<ItemProps[]>(initialItems);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreItems = useCallback(async () => {
    if (!hasMore) return;

    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:3000/api/test?page=${page}`
      );
      const newItems: ItemProps[] = res.data;

      console.log(newItems);

      if (newItems.length === 0) {
        setHasMore(false); // No more items to load
      } else {
        setItems((prevItems) => [...prevItems, ...newItems]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page, hasMore]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMoreItems();
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, loadMoreItems]
  );

  return (
    <div className="py-6 px-2">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div ref={lastElementRef} />
      {isLoading && <LoadingBar />}
    </div>
  );
};

export default ItemsGrid;
