import NavBar from "@/components/navbar/nav-bar";
import InfoBanner from "@/components/infoBanner";
import Footer from "@/components/footer/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <InfoBanner />
      <div>{children}</div>
      <Footer />
    </>
  );
}
