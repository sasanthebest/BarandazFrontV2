import { baseURL ,categoriesUrl } from '@/services/urls';
import axios from 'axios';

export async function getAllCategories() {
  return await axios.get(`${baseURL + categoriesUrl}`);   
};


