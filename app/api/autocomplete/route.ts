import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const { query } = await request.json();

  if (!query) {
    return new Response(
      JSON.stringify({ error: "Query parameter is required" }),
      { status: 400 }
    );
  }

  try {
    const results = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            category: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            brand: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            gender: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      take: 10,
    });

    return Response.json(results);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
