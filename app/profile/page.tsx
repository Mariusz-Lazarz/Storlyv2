import { getServerUser } from "@/utils/authUtils";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const user = await getServerUser();
  return (
    <div className="container p-20">
      <div className="flex gap-4 flex-col">
        <div className="flex flex-row items-center justify-between">
          <span className="text-3xl font-semibold uppercase">
            HELLO {user?.name?.split(" ")[0]}
          </span>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit">Sign out</Button>
          </form>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-semibold uppercase">Email:</span>
          <span className="text-lg uppercase">{user?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
