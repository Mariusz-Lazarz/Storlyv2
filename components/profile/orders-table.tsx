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
import { getUserOrders } from "@/app/actions";

const OrdersTable = async () => {
  const orders = await getUserOrders();
  if (!orders) return <div>Error</div>;

  const ordersTotal = orders.reduce((acc, cur) => acc + cur.total!, 0);
  return (
    <Table>
      <TableCaption>A list of your recent orders.</TableCaption>
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
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell className="w-full">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger>View all products</AccordionTrigger>
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
            <TableCell>20.10.2002</TableCell>
            <TableCell className="text-right">
              ${(order.total! / 100).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">${ordersTotal}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default OrdersTable;
