import { createJwtToken, signIn, validateToken } from "@/services/urls"
import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
        name:'credentials',
        credentials: {
            username: { label: "Username", type: "text", placeholder: "شماره تلفن" },
            token:{label:'token',type:'text',placeholder:'کد تایید'}
          },
        async authorize(credentials){
            const {username,token}=credentials

            // if (!credentials.username || !credentials.token){
            //     throw new Error('invalid credentials')
            // }

            const res=await axios.post(validateToken,{username:username,token:token})

            const user=await res.data
            if (res.status==200 && user){
              return res.data
            }
            return null
        }
    }
    )
  ],
    pages:{
        signIn:'/'
    },
    // debug:process.env.NODE_ENV=='development',
    session:{
        strategy:'jwt'
    },
    // secret:process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)