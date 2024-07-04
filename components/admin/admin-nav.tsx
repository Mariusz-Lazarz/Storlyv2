"use client";

import MainLogo from "../navbar/logo";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const baseClass = "w-full rounded-md p-2 flex gap-2";
    return pathname === path
      ? `${baseClass} bg-gray-800`
      : `${baseClass} hover:bg-gray-700`;
  };

  const links = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: <RxDashboard className="h-6 w-6" />,
    },
    {
      href: "/admin/users",
      label: "Users",
      icon: <FiUsers className="h-6 w-6" />,
    },
    {
      href: "/admin/products",
      label: "Prodcuts",
      icon: <IoBagCheckOutline className="h-6 w-6" />,
    },
    {
      href: "/admin/orders",
      label: "Orders",
      icon: <IoCartOutline className="h-6 w-6" />,
    },
  ];

  return (
    <div className="bg-black p-4 text-white flex flex-col w-2/12">
      <div>
        <MainLogo />
      </div>
      <div className="mt-10 flex flex-col gap-2">
        <span className="uppercase p-2">General</span>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={getLinkClass(link.href)}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default AdminNav;
