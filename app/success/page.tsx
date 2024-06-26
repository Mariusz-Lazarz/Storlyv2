"use client";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import useCartStore from "@/lib/store";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");
  const clearCart = useCartStore((state) => state.clear);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 py-20 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Payment Successful!
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Thank you for your purchase! Your payment has been processed
        successfully.
      </p>
      <p className="text-base text-gray-600 mb-6">
        Your session ID is{" "}
        <span className="font-mono text-blue-600 break-all">{session_id}</span>
      </p>
      <div className="flex flex-row gap-2">
        <Link href="/">
          <Button className="py-6">Return to home</Button>
        </Link>
        <Link href={`/profile`}>
          <Button className="py-6" variant="outline">
            View Order Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
