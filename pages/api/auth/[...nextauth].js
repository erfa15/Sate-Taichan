import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const user = await findUser(email);

        if (user === null || user === undefined) {
          throw new Error("Invalid Email");
        }
        const passwordHashing = await bcrypt.compare(password, user.password);
        if (!passwordHashing) {
          throw new Error("Invalid Password");
        }
        const token = encodeJwt({
          id: user.id,
          role: user.role,
        });

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/admin/signin",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      session.role = token.role.toLowerCase();
      return session;
    },
  },
};

async function findUser(email) {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}

function encodeJwt(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
}

export default NextAuth(authOptions);
