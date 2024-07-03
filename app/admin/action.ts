import { prisma } from "@/lib/db";

export const getTotalRevenue = async () => {
  const total = await prisma.order.findMany({
    select: {
      total: true,
    },
  });

  const totalSum = total.reduce((acc, curr) => acc + curr.total!, 0);

  return (totalSum / 100).toFixed(2);
};

export const getAverageOrderRevenue = async () => {
  const total = await prisma.order.findMany({
    select: {
      total: true,
    },
  });

  const totalSum: number = total.reduce((acc, curr) => acc + curr.total!, 0);
  const orderSum: number = total.length;

  const averageOrderSum: number = totalSum / orderSum;

  return (averageOrderSum / 100).toFixed(2);
};

export const getTotalOrders = async () => {
  const orderCount = await prisma.order.count();

  return orderCount;
};

export const getTopCustomers = async () => {
  const customers = await prisma.user.findMany({
    orderBy: {
      orders: {
        _count: "desc",
      },
    },
    select: {
      name: true,
      image: true,
      _count: {
        select: { orders: true },
      },
    },
    take: 5,
  });

  return customers;
};
