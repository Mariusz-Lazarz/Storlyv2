import { prisma } from "@/lib/db";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

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
    where: {
      orders: {
        some: {},
      },
    },
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

export const getRecentOrders = async () => {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      createdAt: true,
      total: true,
      status: true,
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
    take: 10,
  });

  return orders;
};

export const getMostSellingProducts = async () => {
  const topProducts = await prisma.orderItem.groupBy({
    by: ["productId"],
    _sum: {
      quantity: true,
    },
    orderBy: {
      _sum: {
        quantity: "desc",
      },
    },
    take: 5,
  });

  const productIds = topProducts.map((tp) => tp.productId);

  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
    select: {
      id: true,
      name: true,
      image: true,
    },
  });

  return topProducts.map((tp) => {
    const product = products.find((p) => p.id === tp.productId);
    return {
      name: product?.name,
      image: product?.image,
      totalQuantity: tp._sum.quantity,
      id: product?.id,
    };
  });
};

export const getProducts = async (page: number, query: string) => {
  let products;
  if (query) {
    const product = await prisma.product.findFirst({
      select: {
        id: true,
        name: true,
        category: true,
        price: true,
        image: true,
      },
      where: {
        id: query,
      },
    });
    products = product ? [product] : [];
  } else {
    products = await prisma.product.findMany({
      take: 10,
      skip: (page - 1) * 10,
      select: {
        id: true,
        name: true,
        category: true,
        price: true,
        image: true,
      },
    });
  }
  return products;
};

export const getProductCount = async (query: string) => {
  let count;
  if (query) {
    const product = await prisma.product.findFirst({
      where: {
        id: query,
      },
    });
    count = product ? 1 : 0;
  } else {
    count = await prisma.product.count();
  }
  return count;
};

export const getUsers = async (page: number, query: string) => {
  let users;
  if (query) {
    const user = await prisma.user.findFirst({
      select: {
        id: true,
        email: true,
        image: true,
        role: true,
        createdAt: true,
      },
      where: {
        OR: [{ id: query }, { email: query }],
      },
    });
    users = user ? [user] : [];
  } else {
    users = await prisma.user.findMany({
      take: 10,
      skip: (page - 1) * 10,
      select: {
        id: true,
        email: true,
        image: true,
        role: true,
        createdAt: true,
      },
    });
  }
  return users;
};

export const getUsersCount = async (query: string) => {
  let count;
  if (query) {
    const user = await prisma.user.findFirst({
      where: {
        id: query,
      },
    });
    count = user ? 1 : 0;
  } else {
    count = await prisma.user.count();
  }
  return count;
};

export const getOrders = async (page: number, query: string) => {
  let orders;
  if (query) {
    const order = await prisma.order.findFirst({
      select: {
        id: true,
        status: true,
        total: true,
        createdAt: true,
      },
      where: {
        id: query,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    orders = order ? [order] : [];
  } else {
    orders = await prisma.order.findMany({
      take: 10,
      skip: (page - 1) * 10,
      select: {
        id: true,
        status: true,
        total: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return orders;
};

export const getOrdersCount = async (query: string) => {
  let count;
  if (query) {
    const order = await prisma.order.findFirst({
      where: {
        id: query,
      },
    });
    count = order ? 1 : 0;
  } else {
    count = await prisma.order.count();
  }
  return count;
};
