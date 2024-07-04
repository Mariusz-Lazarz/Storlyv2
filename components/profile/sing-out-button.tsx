"use client";

import { LiaSignOutAltSolid } from "react-icons/lia";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
const SignOutButton = () => {
  const signOutHandler = async () => {
    await signOut();
  };
  return (
    <>
      <Button
        type="submit"
        className="hidden md:block"
        onClick={signOutHandler}
      >
        Sign out
      </Button>
      <Button type="submit" size="icon" className=" md:hidden">
        <LiaSignOutAltSolid className="h-6 w-6" onClick={signOutHandler} />
      </Button>
    </>
  );
};

export default SignOutButton;
