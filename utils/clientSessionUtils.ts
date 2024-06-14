import { useSession } from "next-auth/react";
import { Session } from "next-auth";

export const useClientSession = (): Session["user"] | null => {
  const { data: session } = useSession();
  return session?.user ?? null;
};
