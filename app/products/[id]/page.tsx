import PreviewItem from "@/components/item/preview-item";
import { getSingleItem } from "@/lib/dbFunctions";
import { redirect } from "next/navigation";
import { isOnFavoriteList } from "@/lib/dbFunctions";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const item = await getSingleItem(params.id);
  const isFavorite = await isOnFavoriteList(params.id);
  if (!item) redirect("/not-found");

  console.log(item);
  return (
    <div>
      <PreviewItem item={item} isFavorite={isFavorite!} />
    </div>
  );
};

export default SingleProductPage;
