import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

const Sort = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortBy = [
    { value: "max", text: "Max price" },
    { value: "min", text: "Min price" },
    { value: "newest", text: "Newest" },
    { value: "featured", text: "Featured" },
  ];

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Select
      onValueChange={(value: string) =>
        router.push(pathname + "?" + createQueryString("sort", value))
      }
      value={searchParams.get("sort") || "featured"}
    >
      <SelectTrigger className="w-[140px] border-0 shadow-none md:text-lg">
        <SelectValue placeholder="Sort by" className="placeholder-text-lg" />
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
  );
};

export default Sort;
