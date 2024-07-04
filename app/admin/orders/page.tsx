import TableSearchNav from "@/components/admin/table-search-nav";
import TablePagination from "@/components/admin/table-pagination";
import TableBody from "@/components/admin/table-body";

const AdminOrderPage = () => {
  return (
    <div className="w-full h-full border-[0.5px] border-slate-300 rounded-lg shadow-lg flex flex-col">
      <TableSearchNav label="orders" placeholder="Search by name or id..." />
      <TableBody navLabels={["id", "status", "total", "date"]} />
      <TablePagination />
    </div>
  );
};

export default AdminOrderPage;
