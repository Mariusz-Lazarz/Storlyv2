import Image from "next/image";

const TopCustomers = () => {
  return (
    <div className="p-6">
      <div className="text-center">
        <span className="text-2xl">Top Customers</span>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        {/* Start of item */}
        <div className="flex gap-4">
          <div className="relative w-20 h-16">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
              fill
              className="rounded-full"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col">
              <span className="text-xl">Jenna Ortega</span>
              <span className="font-semibold">
                15<span className="opacity-50 ml-1">Orders</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCustomers;
