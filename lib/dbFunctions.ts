import { prisma } from "@/lib/db";

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

