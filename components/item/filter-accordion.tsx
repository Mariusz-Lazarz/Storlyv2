import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import DualSlider from "./dual-slider";

const FilterAccordion = () => {
  const FILTERS = {
    Brand: ["nike", "reebok", "adidas"],
    Gender: ["female", "male", "unisex"],
    Category: ["equipment", "shoes", "clothing"],
  };

 const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
 
  const createQueryString = useCallback(
    (name: string, value: string, checked: boolean) => {
      const params = new URLSearchParams(searchParams.toString());

      const values = params.getAll(name);
      if (checked) {
        if (!values.includes(value)) {
          params.append(name, value);
        }
      } else {
        const newValues = values.filter((v) => v !== value);
        params.delete(name);
        newValues.forEach((v) => params.append(name, v));
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleCheckboxChange = (
    category: string,
    option: string,
    checked: boolean
  ) => {
    const queryString = createQueryString(
      category.toLowerCase(),
      option,
      checked
    );
    router.push(`${pathname}?${queryString}`);
  };

  return (
    <Accordion type="multiple" className="w-full">
      {Object.entries(FILTERS).map(([category, options], index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-3xl hover:no-underline">
            {category}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            {options.map((option) => {
              const isChecked = searchParams
                .getAll(category.toLowerCase())
                .includes(option);

              return (
                <div
                  key={option}
                  className="items-top flex items-center space-x-2"
                >
                  <Checkbox
                    id={option}
                    checked={isChecked}
                    onCheckedChange={(checked: boolean) =>
                      handleCheckboxChange(category, option, checked)
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={option}
                      className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </label>
                  </div>
                </div>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      ))}
      <AccordionItem value={`item-${Object.keys(FILTERS).length + 1}`}>
        <AccordionTrigger className="text-3xl hover:no-underline">
          Price
        </AccordionTrigger>
        <AccordionContent>
          <DualSlider />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterAccordion;
