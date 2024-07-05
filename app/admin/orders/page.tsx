import TableSearchNav from "@/components/admin/table-search-nav";
import TablePagination from "@/components/admin/table-pagination";

const AdminOrderPage = () => {
  return (
    <div className="w-full h-full border-[0.5px] border-slate-300 rounded-lg shadow-lg flex flex-col">
      <TableSearchNav label="orders" placeholder="Search by email or id..." />
      {/* <TableBody navLabels={["id", "status", "total", "date"]} /> */}
      {/* <TablePagination /> */}
    </div>
  );
};

export default AdminOrderPage;
