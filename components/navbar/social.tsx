"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaApple } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

export const Social = () => {
  const handleSignIn = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <div className="flex flex-col w-full items-center gap-y-6">
      <Button
        size="lg"
        className="w-full flex gap-x-2"
        variant="outline"
        onClick={handleSignIn}
      >
        <FcGoogle className="h-5 w-5" />
        <span className="text-lg">Google</span>
      </Button>
      <Button
        size="lg"
        className="w-full flex gap-x-2"
        variant="outline"
        onClick={() => {}}
      >
        <FaGithub className="h-5 w-5" />
        <span className="text-lg">Github</span>
      </Button>
      <Button
        size="lg"
        className="w-full flex gap-x-2"
        variant="outline"
        onClick={() => {}}
      >
        <FaFacebook className="h-5 w-5" />
        <span className="text-lg">Facebook</span>
      </Button>
      <Button
        size="lg"
        className="w-full flex gap-x-2"
        variant="outline"
        onClick={() => {}}
      >
        <FaApple className="h-5 w-5" />
        <span className="text-lg">Apple</span>
      </Button>
    </div>
  );
};
