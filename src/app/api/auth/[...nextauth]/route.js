import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {

        // example check
        if (
          credentials.email === "admin@test.com" &&
          credentials.password === "123"
        ) {
          return { id: "1", name: "Admin", email: "admin@test.com" };
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
