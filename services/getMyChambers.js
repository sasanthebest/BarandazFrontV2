import { myChambers } from "./urls";
import  getApiclient  from '@/services/api-client';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';



export default async function getMyChambers() {
    const data = await getApiclient (myChambers)
    return data
    
}