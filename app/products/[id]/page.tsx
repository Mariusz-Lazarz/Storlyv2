import PreviewItem from "@/components/item/preview-item";
import { getSingleItem } from "@/lib/dbFunctions";
import { redirect } from "next/navigation";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const item = await getSingleItem(params.id);
  if (!item) redirect("/not-found");
  return (
    <div>
      <PreviewItem item={item} />
    </div>
  );
};

export default SingleProductPage;
