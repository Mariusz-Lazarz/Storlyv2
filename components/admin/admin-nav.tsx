import MainLogo from "../navbar/logo";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";

const AdminNav = () => {
  return (
    <div className="bg-black p-4 text-white flex flex-col">
      <div>
        <MainLogo />
      </div>
      <div className="mt-10">
        <span className="uppercase p-2">General</span>
        <Link
          href="/admin/dashboard"
          className="w-full rounded-md hover:bg-gray-700 p-2 flex gap-2"
        >
          <RxDashboard className="h-6 w-6" />
          <span>Dashboard</span>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default AdminNav;
