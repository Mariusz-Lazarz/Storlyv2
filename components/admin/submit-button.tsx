"use client";

import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Loading..." : text}
    </Button>
  );
};

export default SubmitButton;
