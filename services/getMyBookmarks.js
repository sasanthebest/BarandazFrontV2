import { myBookmarks } from "./urls";
import  getApiclient from '@/services/api-client';

export default async function getMyBookMarks() {
  const data = await getApiclient (myBookmarks)
  return data
}