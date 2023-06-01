import axios from "axios";
import { baseURL, cities } from "./urls";


export default async function getAllCities() {
    const data=await axios.get(`${baseURL + cities}`)
    .then(res=>{
        return res.data
    })
    
    return data
}