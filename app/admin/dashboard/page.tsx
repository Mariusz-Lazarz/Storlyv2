import EcommerceRevenue from "@/components/admin/dashboard/ecommerce-revenue";
import AverageOrderValue from "@/components/admin/dashboard/average-order-value";
import TotalOrderCount from "@/components/admin/dashboard/total-order-count";
import MostSellingProducts from "@/components/admin/dashboard/most-selling-products";
import TopCustomers from "@/components/admin/dashboard/top-customers";
import RecentOrders from "@/components/admin/dashboard/recent-orders";
const AdminDashboardPage = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-4 h-full">
      <div className="bg-white border-[0.5px] shadow-lg rounded-lg col-span-1 row-span-1 overflow-auto">
        <EcommerceRevenue />
      </div>
      <div className="bg-white border-[0.5px] shadow-lg rounded-lg col-span-1 row-span-1 overflow-auto">
        <AverageOrderValue />
      </div>
      <div className="bg-white border-[0.5px] shadow-lg rounded-lg col-span-1 row-span-1 overflow-auto">
        <TotalOrderCount />
      </div>
      <div className="bg-white border-[0.5px] shadow-lg rounded-lg col-span-2 row-span-2 overflow-auto">
        <MostSellingProducts />
      </div>
      <div className="bg-white border-[0.5px] shadow-lg rounded-lg col-span-3 row-span-3 overflow-auto">
        <RecentOrders />
      </div>
      <div className="bg-white border-[0.5px] shadow-lg rounded-lg col-span-2 row-span-2 overflow-auto">
        <TopCustomers />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
