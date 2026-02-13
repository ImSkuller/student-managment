import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        const valid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!valid) return null;

        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role;
      session.user.id = token.id;
      return session;
    },

    async redirect({ url, baseUrl, token }) {
      if (!token?.role) return baseUrl;

      if (token.role === "admin") return `${baseUrl}/admin`;
      if (token.role === "teacher") return `${baseUrl}/teacher`;
      if (token.role === "student") return `${baseUrl}/student`;

      return baseUrl;
    },
  },

  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
