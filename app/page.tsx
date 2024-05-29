import Banner from "@/components/banner";
import ItemsCarousel from "@/components/items-carousel";
import Item from "@/components/item";

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
