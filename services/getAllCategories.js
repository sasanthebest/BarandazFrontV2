import { baseURL ,categoriesUrl } from '@/services/urls';
import axios from 'axios';

export async function getAllCategories() {
  const data= await axios.get(`${baseURL + categoriesUrl}`)
  .then((res)=>{
    return res.data
  })
  return data;   
};


