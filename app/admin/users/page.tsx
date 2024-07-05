import TableSearchNav from "@/components/admin/table-search-nav";
import TablePagination from "@/components/admin/table-pagination";

const AdminUsersPage = () => {
  return (
    <div className="w-full h-full border-[0.5px] border-slate-300 rounded-lg shadow-lg flex flex-col">
      <TableSearchNav label="users" placeholder="Search by name or email..." />
      {/* <TableBody navLabels={["name", "email", "role", "signed up"]} /> */}
      {/* <TablePagination /> */}
    </div>
  );
};

export default AdminUsersPage;
