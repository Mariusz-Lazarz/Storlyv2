"use client";

import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";

const DeleteButton = () => {
  const { toast } = useToast();

  const deleteClickHandler = () => {
    toast({
      variant: "destructive",
      title: "No Permission",
      description:
        "Deletion is not permitted in this test project to prevent items from being removed from the database.",
    });
  };

  return (
    <Button variant="destructive" onClick={deleteClickHandler}>
      Delete
    </Button>
  );
};

export default DeleteButton;
