import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const OPTIONS = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };
