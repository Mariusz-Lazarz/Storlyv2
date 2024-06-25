import Link from "next/link";
import { anton } from "@/lib/fonts";
import { Button } from "./ui/button";

interface MainBannerProps {
  title: string;
  subTitle?: string;
}

const MainBannerHead = ({ title, subTitle }: MainBannerProps) => {
  return (
    <div className="flex justify-center flex-col items-center p-2 mb-20">
      <h1 className={`${anton.className} text-6xl md:text-9xl uppercase`}>
        {title}
      </h1>
      <p className="md:text-lg font-bold my-4 text-center">{subTitle}</p>
      <Link href="/products">
        <Button className="rounded-full p-6">Browse</Button>
      </Link>
    </div>
  );
};

export default MainBannerHead;
