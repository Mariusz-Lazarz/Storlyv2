"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { HeartIcon } from "@radix-ui/react-icons";
import { addToFavorites, deleteFromFavorites } from "@/app/actions";
import { useToast } from "@/components/ui/use-toast";

const AddToFav = ({
  itemId,
  initialIsFavorite,
}: {
  itemId: string;
  initialIsFavorite: boolean;
}) => {
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [loading, setLoading] = useState(false);

  const handleAddToFavoritesClick = async () => {
    setLoading(true);
    try {
      await addToFavorites(itemId);
      setIsFavorite(true);
      toast({
        variant: "success",
        title: "Success!!",
        description: "Item added to a favorite",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFromFavorite = async () => {
    setLoading(true);
    try {
      await deleteFromFavorites(itemId);
      setIsFavorite(false);
      toast({
        variant: "success",
        title: "Removed",
        description: "Item removed from favorite",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isFavorite ? (
        <Button
          className="w-full rounded-full p-8 flex gap-2"
          variant="outline"
          onClick={handleAddToFavoritesClick}
          disabled={loading}
        >
          <span className="text-lg">Favorite</span>
          <span>
            <HeartIcon />
          </span>
        </Button>
      ) : (
        <Button
          className="w-full rounded-full p-8 flex gap-2 bg-pink-300 text-white"
          variant="outline"
          onClick={handleDeleteFromFavorite}
          disabled={loading}
        >
          <span className="text-lg">Remove from favorite</span>
          <span>
            <HeartIcon />
          </span>
        </Button>
      )}
    </>
  );
};

export default AddToFav;
