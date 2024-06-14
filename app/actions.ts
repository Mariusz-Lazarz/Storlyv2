"use server";
import { prisma } from "@/lib/db";
import { getServerUser } from "@/utils/authUtils";

export const addToFavorites = async (itemId: string) => {
  const user = await getServerUser();
  if (!user) throw new Error("You're not logged in, please log in");

  const item = await prisma.product.findUnique({ where: { id: itemId } });

  if (!item) throw new Error("No item found, please try again");

  const existingFavItem = await prisma.favorite.findFirst({
    where: {
      userId: user.id,
      productId: itemId,
    },
  });

  if (existingFavItem) {
    throw new Error("This item is already in your favorites");
  }
  await prisma.favorite.create({
    data: {
      user: {
        connect: { id: user.id },
      },
      product: {
        connect: { id: itemId },
      },
    },
  });
};

export const deleteFromFavorites = async (id: string) => {
  const user = await getServerUser();
  const existingFavItem = await prisma.favorite.findFirst({
    where: {
      productId: id,
      userId: user.id,
    },
  });

  if (!existingFavItem) {
    throw new Error("Favorite item not found");
  }
  await prisma.favorite.delete({
    where: {
      id: existingFavItem.id,
    },
  });
};
