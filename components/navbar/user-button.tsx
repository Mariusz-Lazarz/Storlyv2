"use client";

import { IoPersonOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Social } from "./social";
import Link from "next/link";
import { useSession } from "next-auth/react";

const UserButton = () => {
  const { data: session } = useSession();
  if (!session?.user)
    return (
      <Dialog>
        <DialogTrigger>
          <IoPersonOutline className="h-[26px] w-[26px] cursor-pointer" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex gap-4">
            <DialogTitle className="text-center text-2xl">
              Welcome to Storly
            </DialogTitle>
            <DialogDescription className="text-center text-lg">
              The best shop ever
            </DialogDescription>
            <Social />
            <DialogDescription className="text-center">
              Read our <span className="text-blue-500">Terms of Use</span> and{" "}
              <span className="text-blue-500">Privacy Policy</span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  return (
    <Link href="/profile">
      <IoPersonOutline className="h-[26px] w-[26px] cursor-pointer" />
    </Link>
  );
};

export default UserButton;
