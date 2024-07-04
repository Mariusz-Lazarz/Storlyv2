import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Button } from "../ui/button";

const TablePagination = () => {
  return (
    <div className="mt-auto">
      <div className="w-full h-[1px] bg-slate-300"></div>
      <div className="p-4 flex flex-row justify-between items-center">
        <Button
          variant="outline"
          className="flex flex-row items-center justify-center"
        >
          <MdOutlineKeyboardArrowLeft className="h-[20px] w-[20px]" />
          <span>Previous</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-row items-center justify-center"
        >
          <span>Next</span>
          <MdOutlineKeyboardArrowRight className="h-[20px] w-[20px]" />
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;
