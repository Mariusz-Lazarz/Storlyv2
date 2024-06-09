import { prisma } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));
  const sort = searchParams.get("sort");

  const sortBy: any = {};

  if (sort === "min") sortBy.price = "asc";
  if (sort === "max") sortBy.price = "desc";

  const items = await prisma.product.findMany({
    skip: page * 8,
    take: 8,
    orderBy: [sortBy],
  });
  return Response.json(items);
}
