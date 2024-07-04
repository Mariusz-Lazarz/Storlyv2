import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { anton } from "@/lib/fonts";

interface TableSearchProps {
  label: string;
  placeholder: string;
}

const TableSearchNav = ({ label, placeholder }: TableSearchProps) => {
  return (
    <div>
      <div className="p-4 flex flex-row justify-between items-center">
        <span className={`${anton.className} text-2xl uppercase`}>{label}</span>
        <div className="relative">
          <Input
            type="text"
            placeholder={placeholder}
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <MagnifyingGlassIcon className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
        </div>
        <div></div>
      </div>
      <div className="w-full h-[1px] bg-slate-300"></div>
    </div>
  );
};

export default TableSearchNav;
