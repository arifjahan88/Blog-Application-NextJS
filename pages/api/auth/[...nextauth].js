import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "Arif Jahan" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {},
  secret:
    "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..fskH_vYtR302Mkdo.2QDv8FKdXbpveQOKObzMz3roPP4KthX1R9aIZIHFH7WlPOFpckfBYjbO_iiCjsZn27mjQuHMkybqtUBDjUU9FnSK3p_99sbxXXTrMDAktb9iAhWNNt_W0M6lEAs156mTlwiCZHFfnJiTwFC2At3Dkp8c6Nrj8hHsvCzemLYiCB4n9cUaFb136A.2eihjni48PrvxzTk0f17lw",
};

export default NextAuth(authOptions);
