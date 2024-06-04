import { Button } from "../ui/button";
import { HeartIcon } from "@radix-ui/react-icons";

const AddToFav = () => {
  return (
    <Button className="w-full rounded-full  p-8 flex gap-2" variant="outline">
      <span className="text-lg">Favorite</span>
      <span>
        <HeartIcon />
      </span>
    </Button>
  );
};

export default AddToFav;
