import { prisma } from "@/lib/db";
import { getServerUser } from "@/utils/authUtils";
import { unstable_noStore as noStore } from "next/cache";

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    return null;
  }
};

export const getSingleItem = async (id: string) => {
  try {
    const item = await prisma.product.findUnique({ where: { id: id } });
    return item;
  } catch (error) {
    console.log(error);
  }
};

export const isOnFavoriteList = async (id: string) => {
  noStore();
  const user = await getServerUser();
  if (!user) return;

  const isFavorite = await prisma.favorite.findFirst({
    where: {
      userId: user.id,
      productId: id,
    },
  });

  return !!isFavorite;
};

export const getUserFavoriteItems = async () => {
  const user = await getServerUser();
  if (!user) return [];

  const items = await prisma.favorite.findMany({
    where: { userId: user.id },
    include: { product: true },
  });

  return items;
};
