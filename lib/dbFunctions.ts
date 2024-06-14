import { prisma } from "@/lib/db";
import { getServerUser } from "@/utils/authUtils";

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
