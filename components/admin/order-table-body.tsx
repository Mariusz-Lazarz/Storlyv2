import { Button } from "@/components/ui/button";
import { getOrders } from "@/app/admin/action";
import { Badge } from "../ui/badge";
import DeleteButton from "./delete-button";
import { formatDate } from "@/lib/helpers";


const OrderTableBody = async ({
  page,
  query,
}: {
  page: number;
  query: string;
}) => {
  const orders = await getOrders(page, query);
  return (
    <div className="overflow-auto">
      {orders.map((order) => (
        <div className="p-4 grid grid-cols-5 text-center" key={order.id}>
          <div className="flex flex-row items-center gap-2 justify-center">
            <span className="truncate">{order.id}</span>
          </div>
          <span className="text-center flex items-center justify-center uppercase p-2">
            <Badge variant="outline">{order.status}</Badge>
          </span>
          <span className="text-center flex items-center justify-center uppercase">
            ${(order.total! / 100).toFixed(2)}
          </span>
          <span className="text-center flex items-center justify-center">
            {formatDate(order.createdAt)}
          </span>
          <div className="flex flex-row items-center justify-center gap-2">
            <Button variant="outline">View</Button>
            <DeleteButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderTableBody;
