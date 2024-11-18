import { getServerSession } from "next-auth";
import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
export default async function getSession() {
  const session = await getServerSession(OPTIONS);
  return session?.user;
}
