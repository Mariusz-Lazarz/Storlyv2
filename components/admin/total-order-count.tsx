import { getTotalOrders } from "@/app/admin/action";
import { Suspense } from "react";
import LoadingSpinner from "./loading-spinner";

const TotalOrderCount = () => {
  return (
    <div className="p-4 flex flex-col gap-4 h-full text-center">
      <span className="text-2xl">Total Oders</span>
      <Suspense fallback={<LoadingSpinner />}>
        <OrderCount />
        <span className="mt-auto text-green-500">
          +28% <span className="text-white">compared to next week</span>
        </span>
      </Suspense>
    </div>
  );
};

const OrderCount = async () => {
  const count = await getTotalOrders();
  return <span className="mt-6 text-4xl">{count}</span>;
};

export default TotalOrderCount;
