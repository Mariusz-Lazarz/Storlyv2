import PreviewItem from "@/components/item/preview-item";
import {
  getSingleItem,
  isOnFavoriteList,
  getRecommendedItems,
} from "@/app/actions";
import { redirect } from "next/navigation";
import ItemsCarousel from "@/components/item/items-carousel";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const item = await getSingleItem(params.id);
  const isFavorite = await isOnFavoriteList(params.id);
  if (!item) redirect("/not-found");
  const recommendedItems = await getRecommendedItems(item.category, item.id);

  return (
    <div>
      <PreviewItem item={item} isFavorite={isFavorite!} />
      <ItemsCarousel
        title="You might also like"
        items={recommendedItems!}
        variant="vertical"
      />
    </div>
  );
};

export default SingleProductPage;
