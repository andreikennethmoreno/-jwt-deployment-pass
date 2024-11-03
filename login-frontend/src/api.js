import axios from './axios';

const api = axios.create({
    baseURL: 'https://login-backend-2y9h92a3o-andreikennethmorenos-projects.vercel.app/api'
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
