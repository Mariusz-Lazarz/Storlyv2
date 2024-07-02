import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-center mb-44">
        <h2 className="text-5xl">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className="text-blue-500 underline">
          Return Home
        </Link>
      </div>
    </div>
  );
}
