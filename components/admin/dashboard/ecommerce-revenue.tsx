import { getTotalRevenue } from "@/app/admin/action";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loading-spinner";
import { anton } from "@/lib/fonts";

const EcommerceRevenue = async () => {
  return (
    <div className="p-4 flex flex-col gap-4 h-full text-center">
      <span className={`text-2xl ${anton.className}`}>Ecommerce Revenue</span>
      <Suspense fallback={<LoadingSpinner />}>
        <TotalRevenue />
        <span className="mt-auto text-green-500">
          +18% <span className="text-gray-500">compared to next week</span>
        </span>
      </Suspense>
    </div>
  );
};

const TotalRevenue = async () => {
  const total = await getTotalRevenue();
  return <span className="mt-6 text-4xl">${total}</span>;
};

export default EcommerceRevenue;
