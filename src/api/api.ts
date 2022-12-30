import axios from 'axios'
const BASE_URL = `${process.env.REACT_APP_BACKEND_PROD_URL}/api`
const api = axios.create({baseURL: BASE_URL})
export default api