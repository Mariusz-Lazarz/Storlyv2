"use client";

import { Button } from "../ui/button";
import { useState } from "react";

const SizePicker = () => {
  const [size, setSize] = useState<string>("EU 36");

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
              className={`p-6 text-lg ${
                size == `EU ${36 + index}` ? "border-2 border-blue-500" : ""
              }`}
              onClick={handleClick}
            >
              {`EU ${36 + index}`}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SizePicker;
