import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/nav-bar";
import InfoBanner from "@/components/infoBanner";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@/auth";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Storlyv2",
  description: "The best shop ever!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <InfoBanner />
          {children}
          <Toaster />
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
