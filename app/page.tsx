import Banner from "@/components/banner";
import ItemsCarousel from "@/components/item/items-carousel";

export default async function Home() {
  return (
    <>
      <Banner />
      <div className="p-8">
        <ItemsCarousel title="Check our iconic items " />
      </div>
    </>
  );
}
