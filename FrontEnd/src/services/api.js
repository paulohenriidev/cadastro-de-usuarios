import axios from "axios"; 

const api = axios.create({
    baseURL: 'https://cadastro-de-usuarios-backend.onrender.com',
})

export default api