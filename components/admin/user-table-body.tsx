import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getUsers } from "@/app/admin/action";
import DeleteButton from "./delete-button";

const formatDate = (isoDateString: Date) => {
  const date = new Date(isoDateString);

  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");

  return `${day}.${month}.${year}`;
};

const UserTableBody = async ({
  page,
  query,
}: {
  page: number;
  query: string;
}) => {
  const users = await getUsers(page, query);
  return (
    <div className="overflow-auto">
      {users.map((user) => (
        <div className="p-4 grid grid-cols-5 text-center" key={user.id}>
          <div className="flex flex-row items-center gap-2 justify-start">
            <div className="relative w-12 h-12">
              <Image
                src={user.image!}
                alt={user.email!}
                fill
                className="rounded-full shadow-md"
                loading="lazy"
              />
            </div>
            <span className="truncate">{user.id}</span>
          </div>
          <span className="text-center flex items-center justify-center">
            {user.email}
          </span>
          <span className="text-center flex items-center justify-center uppercase">
            {user.role}
          </span>
          <span className="text-center flex items-center justify-center">
            {formatDate(user.createdAt)}
          </span>
          <div className="flex flex-row items-center justify-center gap-2">
            <Button variant="outline">View</Button>
            <DeleteButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTableBody;
