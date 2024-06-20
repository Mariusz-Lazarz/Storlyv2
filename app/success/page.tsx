"use client";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Payment Successful!
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Thank you for your purchase! Your payment has been processed
        successfully.
      </p>
      <p className="text-base text-gray-600 mb-6">
        Your session ID is{" "}
        <span className="font-mono text-blue-600">{session_id}</span>
      </p>
      <div className="flex flex-row gap-2">
        <Link href="/">
          <Button className="py-6">Return to home</Button>
        </Link>
        <Link href={`/order-details?session_id=${session_id}`}>
          <Button className="py-6" variant="outline">
            View Order Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
