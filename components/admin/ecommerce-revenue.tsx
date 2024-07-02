import { getTotalRevenue } from "@/app/admin/action";

const EcommerceRevenue = async () => {
  const total = await getTotalRevenue();
  return (
    <div className="p-4 flex flex-col gap-4 h-full text-center">
      <span className="text-2xl">Ecommerce Revenue</span>
      <span className="mt-6 text-4xl">${total}</span>
      <span className="mt-auto text-green-500">
        +18% <span className="text-white">compared to next week</span>
      </span>
    </div>
  );
};

export default EcommerceRevenue;
