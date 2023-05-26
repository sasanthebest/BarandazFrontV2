import { baseURL, createJwtToken, signIn, validateToken } from "@/services/urls"
import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        phone: { label: "username", type: "text", placeholder: "شماره تلفن" },
        code: { label: 'token', type: 'text', placeholder: 'کد تایید' }
      },
      async authorize(credentials) {
        const { phone, code } = credentials

        const res = axios.post(`${baseURL+ validateToken}`, { username: phone, token: code })
          .then((res) => {
            if (res.status === 200) {
              const user = res.data
              if (res.status == 200 && user) {
                return user
              }
            } 
          
          })
          .catch((err) => {
            // console.log("errrrrr:",err.data);
              return err.data
          })

        return res

      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log("users:",user);
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // console.log("sesen:", session);
      // console.log("user:", user);
      // console.log("token:", token);

      session.user = token;
      return session;
    }
  },
  pages: {
    signIn: '/enter'
  },
  // debug:process.env.NODE_ENV=='development',
  session: {
    strategy: 'jwt'
  },

  // secret:process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)