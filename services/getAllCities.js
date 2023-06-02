import { baseURL, cities } from "./urls";


export default async function getAllCities() {
    const data=await fetch(`${baseURL + cities}`)
    .then(res=>{
        return res.json()
    })
    
    return data
}