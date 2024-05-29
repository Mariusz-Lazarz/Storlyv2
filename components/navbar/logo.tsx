import Link from "next/link";

const MainLogo = ({ isSticky }: { isSticky: boolean }) => {
  return (
    <Link href="/">
      {" "}
      <h1
        className={` font-semibold drop-shadow-lg transition-all duration-300 ease-in-out ${
          isSticky ? "text-2xl" : "text-3xl"
        }`}
      >
        Storlyv2
      </h1>
    </Link>
  );
};

export default MainLogo;
