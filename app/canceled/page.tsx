import { Button } from "@/components/ui/button";
import Link from "next/link";

const CanceledPage = () => {
  return (
    <div className="flex flex-col items-center  h-screen bg-gray-100 py-20  text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Payment Canceled
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        We`re sorry to see you go! Your payment has been successfully canceled.
      </p>
      <p className="text-base text-gray-600 mb-6">
        If you have any questions or need further assistance, please don`t
        hesitate to contact our support team.
      </p>
      <div className=" flex flex-row gap-2">
        <Link href="/">
          <Button className="p-6">Return to home</Button>
        </Link>
        <Link href="/cart">
          <Button className="p-6" variant="outline">
            Return to cart
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CanceledPage;
