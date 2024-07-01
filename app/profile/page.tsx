import { getServerUser } from "@/utils/authUtils";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import OrdersTable from "@/components/profile/orders-table";
import { Suspense } from "react";
import OrdersSekleton from "@/components/profile/orders-skeleton";
import Link from "next/link";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const SettingsPage = async () => {
  const user = await getServerUser();
  return (
    <div className="p-4 md:p-20">
      <div className="flex gap-4 flex-col">
        <div className="flex flex-row items-center justify-between">
          <span className="text-3xl font-semibold uppercase">
            HELLO {user?.name?.split(" ")[0]}
          </span>
          <div className="flex gap-2">
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/", redirect: true });
                revalidatePath("/", "layout");
              }}
            >
              <Button type="submit" className="hidden md:block">
                Sign out
              </Button>
              <Button type="submit" size="icon" className=" md:hidden">
                <LiaSignOutAltSolid className="h-6 w-6" />
              </Button>
            </form>
            <Link href="/admin">
              <Button className="hidden md:block">Admin Panel</Button>
              <Button size="icon" className=" md:hidden">
                <MdOutlineAdminPanelSettings className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-semibold uppercase">Email:</span>
          <span className="text-lg uppercase">{user?.email}</span>
        </div>
      </div>
      <div className="mt-10">
        <Suspense fallback={<OrdersSekleton />}>
          <OrdersTable />
        </Suspense>
      </div>
    </div>
  );
};

export default SettingsPage;
