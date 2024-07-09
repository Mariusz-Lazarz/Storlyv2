import TableSearchNav from "@/components/admin/table-search-nav";
import TablePagination from "@/components/admin/table-pagination";
import { getOrdersCount } from "../action";
import TableNavLabels from "@/components/admin/table-nav-labels";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loading-spinner";
import OrderTableBody from "@/components/admin/order-table-body";

const AdminOrderPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = Number(searchParams?.page) || 1;
  const q = String(searchParams.q) || "";
  const count = await getOrdersCount(q);

  return (
    <div className="w-full h-full border-[0.5px] border-slate-300 rounded-lg shadow-lg flex flex-col">
      <TableSearchNav label="products" placeholder="Search by id..." />
      <div className="flex flex-col flex-grow overflow-hidden">
        <TableNavLabels navLabels={["id", "status", "total", "date"]} />
        <div className="w-full h-[1px] bg-slate-300"></div>
        <Suspense fallback={<LoadingSpinner />}>
          <OrderTableBody page={page} query={q} />
        </Suspense>
      </div>

      <TablePagination count={count} page={page} />
    </div>
  );
};

export default AdminOrderPage;
