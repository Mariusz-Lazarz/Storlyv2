import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { getUserOrders } from "@/app/actions";
import { formatDate } from "@/lib/helpers";

const OrdersTable = async () => {
  const orders = await getUserOrders();
  if (!orders) return;

  const ordersTotal = orders.reduce((acc, cur) => acc + cur.total!, 0);

  return (
    <Table>
      <TableCaption className="mb-4">
        A list of your recent orders.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-bold">{order.id}</TableCell>
            <TableCell>
              <Badge className="uppercase" variant="outline">
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="w-full">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger className="text-lg">
                    View all products
                  </AccordionTrigger>
                  {order.orderItems.map((item) => (
                    <AccordionContent key={item.id}>
                      <span className="font-semibold text-md">
                        {item.product.name}
                      </span>
                      <span> | Qty: {item.quantity}</span>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>
            </TableCell>
            <TableCell className="text-lg">
              {formatDate(order.createdAt)}
            </TableCell>
            <TableCell className="text-right text-lg">
              ${(order.total! / 100).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="text-lg">
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            ${(ordersTotal / 100).toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default OrdersTable;
