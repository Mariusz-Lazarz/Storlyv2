import { getRecentOrders } from "@/app/admin/action";
import Image from "next/image";
import { Suspense } from "react";
import LoadingSpinner from "./loading-spinner";
import { anton } from "@/lib/fonts";

const formatDate = (isoDateString: Date) => {
  const date = new Date(isoDateString);

  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");

  return `${day}.${month}.${year}`;
};

const RecentOrders = async () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <span className={`text-2xl ${anton.className}`}>Recent Orders</span>
      </div>
      <div className="grid grid-cols-5 text-center font-semibold my-4">
        <span>Customer</span>
        <span>Order ID</span>
        <span>Status</span>
        <span>Date</span>
        <span>Total</span>
      </div>
      <div className="flex flex-col gap-4">
        <Suspense fallback={<LoadingSpinner />}>
          <Orders />
        </Suspense>
      </div>
    </div>
  );
};

const Orders = async () => {
  const orders = await getRecentOrders();
  return (
    <>
      {orders.map((order) => (
        <div className="grid grid-cols-5 items-center gap-4" key={order.id}>
          <div className="flex flex-row items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src={order.user.image!}
                alt={order.user.name!}
                fill
                className="rounded-full"
              />
            </div>
            <span>{order.user.name}</span>
          </div>
          <span className="text-center truncate">{order.id}</span>
          <span className="text-center">{order.status}</span>
          <span className="text-center">{formatDate(order.createdAt)}</span>
          <span className="text-center">
            ${(order.total! / 100).toFixed(2)}
          </span>
        </div>
      ))}
    </>
  );
};

export default RecentOrders;
