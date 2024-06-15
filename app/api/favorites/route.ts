import { prisma } from "@/lib/db";
import { getServerUser } from "@/utils/authUtils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));
  const user = await getServerUser();

  if (!user) return Response.json("Unauthorized");

  const items = await prisma.favorite.findMany({
    skip: page * 8,
    take: 8,
    where: { userId: user.id },
    include: { product: true },
  });

  const products = items.map((item) => item.product);
  return Response.json(products);
}
