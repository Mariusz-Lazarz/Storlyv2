import AdminNav from "@/components/admin/admin-nav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-screen">
      <AdminNav />
        <div className="w-full p-6 h-screen">{children}</div>
    </div>
  );
}
