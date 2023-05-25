import { myChambers } from "./urls";
import  getApiclient  from '@/services/api-client';

export default async function getMyChambers() {
    const data = await getApiclient (myChambers)
    return data
    
}