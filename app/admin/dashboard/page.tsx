import EcommerceRevenue from "@/components/admin/ecommerce-revenue";
import AverageOrderValue from "@/components/admin/average-order-value";
import TotalOrderCount from "@/components/admin/total-order-count";
import MostSellingProducts from "@/components/admin/most-selling-products";
import TopCustomers from "@/components/admin/top-customers";
import RecentOrders from "@/components/admin/recent-orders";;

const AdminDashboardPage = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-4 h-full text-white">
      <div className="bg-gray-800 rounded-lg col-span-1 row-span-1">
        <EcommerceRevenue />
      </div>
      <div className="bg-gray-800 rounded-lg col-span-1 row-span-1">
        <AverageOrderValue />
      </div>
      <div className="bg-gray-800 rounded-lg col-span-1 row-span-1">
        <TotalOrderCount />
      </div>

      <div className="bg-gray-800 rounded-lg col-span-2 row-span-2">
        <MostSellingProducts />
      </div>

      <div className="bg-gray-800 rounded-lg col-span-3 row-span-3">
        <RecentOrders />
      </div>

      <div className="bg-gray-800 rounded-lg col-span-2 row-span-2">
        <TopCustomers />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
