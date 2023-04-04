import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "5ba1a4195f5bc6220384",
      clientSecret: "3bce2c0472dc244555b2c8110cef97145fee5b28",
    }),
  ],
};

export default NextAuth(authOptions);
