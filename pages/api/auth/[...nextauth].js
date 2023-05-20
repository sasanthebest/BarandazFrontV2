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
            phone: { label: "username", type: "text", placeholder: "شماره تلفن" },
            code:{label:'token',type:'text',placeholder:'کد تایید'}
          },
        async authorize(credentials){
            const {phone,code}=credentials

            const res=axios.post(`http://127.0.0.1:8000/${validateToken}`,{username:phone,token:code})
            .then((res)=>{
              

              if (res.status===200){
  
                const user=res.data
                    if (res.status==200 && user){
                     return user
                   }
                  }
            })
            .catch((err)=>{

              if (err.status===404){
                return err

              }    
              
            })

            return res
          
        }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
        return { ...token, ...user };
    },
    async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.user = token;      
        return session;
    }
  },
  pages:{
        signIn:'/enter'
    },
    // debug:process.env.NODE_ENV=='development',
  session:{
        strategy:'jwt'
    },
  
    // secret:process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)