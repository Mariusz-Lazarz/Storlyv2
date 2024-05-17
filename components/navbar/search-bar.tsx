import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchBar = () => {
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search..."
        className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <MagnifyingGlassIcon className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
