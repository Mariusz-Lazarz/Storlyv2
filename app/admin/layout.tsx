import AdminNav from "@/components/admin/admin-nav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <AdminNav />
      <div className="w-full p-6">{children}</div>
    </div>
  );
}
