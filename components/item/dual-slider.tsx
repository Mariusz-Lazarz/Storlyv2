import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState, useCallback, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
type SliderProps = React.ComponentProps<typeof Slider>;

const DualSlider = ({ className, ...props }: SliderProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [range, setRange] = useState<[number, number]>([0, 999]);

  useEffect(() => {
    const minPrice = searchParams.get("price_min");
    const maxPrice = searchParams.get("price_max");

    setRange([
      minPrice ? Number(minPrice) : 0,
      maxPrice ? Number(maxPrice) : 999,
    ]);
  }, [searchParams]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleMinPriceChange = (values: number[]) => {
    if (values[0] <= range[1]) {
      setRange([values[0], range[1]]);
    }
  };

  const handleMaxPriceChange = (values: number[]) => {
    if (values[0] >= range[0]) {
      setRange([range[0], values[0]]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-center">
        <span className="text-lg">Min: ${range[0]}</span>
        <span className="text-lg">Max: ${range[1]}</span>
      </div>
      <div>
        <Slider
          value={[range[0]]}
          min={0}
          max={999}
          step={1}
          className={cn("w-full", className)}
          {...props}
          onValueChange={handleMinPriceChange}
          onValueCommit={() =>
            router.push(
              pathname + "?" + createQueryString("price_min", String(range[0]))
            )
          }
        />
      </div>
      <div>
        <Slider
          value={[range[1]]}
          min={0}
          max={999}
          step={1}
          className={cn("w-full", className)}
          {...props}
          onValueChange={handleMaxPriceChange}
          onValueCommit={() =>
            router.push(
              pathname + "?" + createQueryString("price_max", String(range[1]))
            )
          }
        />
      </div>
    </div>
  );
};

export default DualSlider;
