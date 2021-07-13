import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      domain: process.env.COGNITO_DOMAIN,
    }),
  ],
  callbacks: {
    jwt: async (token, _user, account, _profile, _isNewUser) => {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
        token.idToken = account.idToken;
      }
      return token;
    },
    async session(session, token) {
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;

      return session;
    },
  },
});
