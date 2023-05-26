
import axios  from 'axios';
import { baseURL, ValidationTokenUrl } from '@/services/urls';

export default async function getValidationToken(data) {
return await axios.post(`${baseURL+ValidationTokenUrl}`,data)
}
