import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Arif Jahan" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
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
