import Image from "next/image";

const Item = () => {
  return (
    <div className="hover:cursor-pointer">
      <div className="relative w-full h-48 md:h-72 lg:h-96">
        <Image
          src="https://as2.ftcdn.net/v2/jpg/04/79/11/23/1000_F_479112353_sV9RIefOoUruPX3HG1QeCnjZ40gOOev7.jpg"
          fill
          style={{ objectFit: "cover" }}
          alt="image"
        />
      </div>
      <div className="flex flex-col mt-4">
        <span className="text-orange-700 font-semibold">Bestseller</span>
        <span className="font-bold">Nike Air Force 1</span>
        <span className="font-semibold text-gray-400">Man shoes</span>
        <span className="font-semibold">$149,99</span>
      </div>
    </div>
  );
};

export default Item;
