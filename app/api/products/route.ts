import { prisma } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));
  const sort = searchParams.get("sort");
  const categoryArray = searchParams.getAll("category");
  const genderArray = searchParams.getAll("gender");
  const brandArray = searchParams.getAll("brand");
  const minPrice = Number(searchParams.get("price_min"));
  const maxPrice = Number(searchParams.get("price_max"));

  const genderFilter =
    genderArray.length > 0
      ? genderArray.map((gender) => ({ gender }))
      : undefined;

  const brandFilter =
    brandArray.length > 0 ? brandArray.map((brand) => ({ brand })) : undefined;

  const categoryFilter =
    categoryArray.length > 0
      ? categoryArray.map((category) => ({ category }))
      : undefined;

  const sortBy: any = {};

  if (sort === "min") sortBy.price = "asc";
  if (sort === "max") sortBy.price = "desc";

  const priceFilter: any = {};
  if (minPrice !== 0) priceFilter.gte = Number(minPrice);
  if (maxPrice !== 0) priceFilter.lte = Number(maxPrice);

  const items = await prisma.product.findMany({
    skip: page * 8,
    take: 8,
    orderBy: [sortBy],
    where: {
      AND: [
        genderFilter ? { OR: genderFilter } : {},
        brandFilter ? { OR: brandFilter } : {},
        categoryFilter ? { OR: categoryFilter } : {},
        Object.keys(priceFilter).length > 0 ? { price: priceFilter } : {},
      ],
    },
  });
  return Response.json(items);
}
