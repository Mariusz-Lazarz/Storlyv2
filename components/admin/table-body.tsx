import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TableBodyProps {
  navLabels: string[];
}

const TableBody = ({ navLabels }: TableBodyProps) => {
  return (
    <div className="flex flex-col flex-grow overflow-hidden">
      <div className="p-4 bg-orange-50 grid grid-cols-5 text-center">
        {navLabels.map((label) => (
          <span className="uppercase" key={label}>
            {label}
          </span>
        ))}
      </div>
      <div className="w-full h-[1px] bg-slate-300"></div>
      <div className="flex-grow overflow-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="p-4 grid grid-cols-5 text-center" key={index}>
            <div className="flex flex-row items-center gap-2 justify-center">
              <div className="relative w-12 h-12">
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="test"
                  fill
                  className="rounded-full"
                />
              </div>
              <span>Mariusz Łazarz</span>
            </div>
            <span className="text-center flex items-center justify-center">
              test@email.com
            </span>
            <span className="text-center flex items-center justify-center uppercase">
              ADMIN
            </span>
            <span className="text-center flex items-center justify-center">
              20.02.2002
            </span>
            <div className="flex flex-row items-center justify-center gap-2">
              <Button variant="outline">View</Button>
              <Button variant="destructive">Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableBody;
