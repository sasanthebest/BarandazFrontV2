import axios from "axios";
import { singleCategory,baseURL } from "./urls";


export async function getCategoryById(params) {
    const category =await axios.get(`${baseURL + singleCategory(params)}`)
    .then(res=>{
        
        return res.data
    })
    return category
    
}