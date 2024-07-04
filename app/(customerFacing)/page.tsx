import Banner from "@/components/banner";
import ItemsCarousel from "@/components/item/items-carousel";
import MainBannerHead from "@/components/main-banner-head";
import MainBannerGrid from "@/components/main-banner-grid";

export default async function Home() {
  const iconic = [
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Running Shoes",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Jordan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Air force 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "New Balance",
    },
  ];
  const byGender = [
    {
      image:
        "https://images.unsplash.com/photo-1618333845076-890b5baf8ffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9vZGllc3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Woman",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512977141980-8cc662e38a0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Man",
    },
    {
      image:
        "https://images.unsplash.com/photo-1635796244808-d93b6e26de62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",
      category: "Unisex",
    },
  ];

  const mainGrid = [
    {
      image:
        "https://images.unsplash.com/photo-1637146756683-b613d394c8a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG5pa2V8ZW58MHx8MHx8fDA%3D",
      title: "Classic Air Force 1",
      subTitle: "Timeless Old School Design",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505915909330-c082888680af?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ultimate Sports Gear",
      subTitle: "Active Lifestyle",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559166631-ef208440c75a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fG5pa2V8ZW58MHx8MHx8fDA%3D",
      title: "Essential Running Kit",
      subTitle: "Train Like a Pro",
    },
    {
      image:
        "https://images.unsplash.com/photo-1623596305214-19f21cbf48ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG5pa2V8ZW58MHx8MHx8fDA%3D",
      title: "City Streetwear",
      subTitle: "Urban Fashion Essentials",
    },
  ];

  return (
    <>
      <Banner />
      <MainBannerHead
        title="Gear Up"
        subTitle="Shop the latest sportswear and equipment at unbeatable prices."
      />
      <MainBannerGrid items={mainGrid} />
      <MainBannerHead title="New This Week" />
      <ItemsCarousel
        title="Check our iconic items"
        items={iconic}
        variant="horizontal"
      />
      <ItemsCarousel
        title="Discover by gender"
        items={byGender}
        variant="vertical"
      />
    </>
  );
}
