import { prisma } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));

  const items = await prisma.product.findMany({ skip: page * 8, take: 8 });
  return Response.json(items);
}
