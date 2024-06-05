import ItemsCarousel from "./items-carousel";
import MostFrequentQuestions from "./most-frequent-questions";
import ItemInfo from "./item-info";
import SizePicker from "./size-picker";
import ItemHeader from "./item-header";
import ImageCarousel from "./image-carousel";
import { ItemProps } from "@/lib/definition";

const PreviewItem = async ({ item }: { item: ItemProps }) => {
  return (
    <>
      <div className="md:container flex flex-col gap-10 xl:px-48 md:grid md:grid-cols-3 md:gap-6 mt-10">
        <ImageCarousel image={item?.image} />
        <div className="p-4 md:p-0 flex flex-col col-span-1 gap-10">
          <ItemHeader
            itemHeader={{
              gender: item.gender,
              name: item.name,
              price: item.price,
            }}
          />
          <SizePicker />
          <ItemInfo />
          <MostFrequentQuestions />
        </div>
      </div>
      <div className="p-2">
        <ItemsCarousel title="You might also like these " />
      </div>
    </>
  );
};

export default PreviewItem;
