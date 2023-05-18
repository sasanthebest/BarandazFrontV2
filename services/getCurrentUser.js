
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import axios from "axios"

import { getServerSession } from "next-auth/next"
import { createJwtToken, signIn } from "./urls"



export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session=await getSession()


  if (!session?.user){
    return null
  }
  return session.user
}