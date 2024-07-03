import { getTopCustomers } from "@/app/admin/action";
import Image from "next/image";
import { Suspense } from "react";
import LoadingSpinner from "./loading-spinner";

const TopCustomers = async () => {
  return (
    <div className="p-6">
      <div className="text-center">
        <span className="text-2xl">Top Customers</span>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <Suspense fallback={<LoadingSpinner />}>
          <Customers />
        </Suspense>
      </div>
    </div>
  );
};

const Customers = async () => {
  const customers = await getTopCustomers();
  if (!customers) return <div>Internal server error!</div>;

  return (
    <>
      {customers.map((customer, index) => (
        <div className="flex gap-4" key={index}>
          <div className="relative w-20 h-16">
            <Image
              src={customer.image!}
              alt={customer.name!}
              fill
              className="rounded-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col">
              <span className="text-xl">{customer.name}</span>
              <span className="font-semibold">
                {customer._count.orders}
                <span className="opacity-50 ml-1">Orders</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default TopCustomers;
