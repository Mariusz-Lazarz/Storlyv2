import Image from "next/image";

const RecentOrders = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <span className="text-2xl">Recent Orders</span>
      </div>
      <div className="grid grid-cols-5 text-center font-semibold my-10">
        <span>Customer</span>
        <span>Order ID</span>
        <span>Status</span>
        <span>Date</span>
        <span>Total</span>
      </div>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="grid grid-cols-5 items-center gap-4" key={index}>
            <div className="flex flex-row items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="product"
                  fill
                  className="rounded-full"
                />
              </div>
              <span>Jenna Ortega</span>
            </div>
            <span className="text-center">2105681068101</span>
            <span className="text-center">Pending</span>
            <span className="text-center">20.10.2000</span>
            <span className="text-center">$201.99</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
