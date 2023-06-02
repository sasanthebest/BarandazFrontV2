import { baseURL ,categoriesUrl } from '@/services/urls';


export async function getAllCategories() {
  const data= await fetch(`${baseURL + categoriesUrl}`)
  .then((res)=>{
    return res.json()
  })

  return data;   
};


