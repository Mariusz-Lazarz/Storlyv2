import { auth } from "@/auth";
import { Session } from "next-auth";

export const getServerUser = async (): Promise<Session["user"] | null> => {
  const session: Session | null = await auth();
  return session?.user ?? null;
};
