"use client";

import { Button } from "../ui/button";
import { useState } from "react";
import AddToFav from "./add-to-fav";
import AddToCart from "./add-to-cart";

const SizePicker = () => {
  const [size, setSize] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedSize = (e.target as HTMLButtonElement).innerText;
    setSize(selectedSize);
  };

  return (
    <>
      <div>
        <div className="flex justify-between font-semibold mb-2">
          <span>Choose size</span>
          <span className="opacity-50">Size guide</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <Button
              variant="outline"
              key={index}
              className="p-6 text-lg"
              onClick={handleClick}
            >
              {`EU ${36 + index}`}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <AddToCart itemSize={size} />
        <AddToFav />
      </div>
    </>
  );
};

export default SizePicker;
