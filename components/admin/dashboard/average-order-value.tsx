import { getAverageOrderRevenue } from "@/app/admin/action";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loading-spinner";
import { anton } from "@/lib/fonts";

const AverageOrderValue = async () => {
  return (
    <div className="p-4 flex flex-col gap-4 h-full text-center">
      <span className={`text-2xl ${anton.className}`}>Average Order Value</span>
      <Suspense fallback={<LoadingSpinner />}>
        <AverageOrderRevenue />
        <span className="mt-auto text-red-500">
          -18% <span className="text-gray-500">compared to next week</span>
        </span>
      </Suspense>
    </div>
  );
};

const AverageOrderRevenue = async () => {
  const average = await getAverageOrderRevenue();

  return <span className="mt-6 text-4xl">${average}</span>;
};

export default AverageOrderValue;
