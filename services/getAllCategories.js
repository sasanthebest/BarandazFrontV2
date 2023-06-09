import { baseURL ,categoriesUrl } from '@/services/urls';


export async function getAllCategories() {
  const data= await fetch(`${baseURL + categoriesUrl}`,{cache:'no-cache'})
  .then((res)=>{
    return res.json()
  })

  return data;   
};


