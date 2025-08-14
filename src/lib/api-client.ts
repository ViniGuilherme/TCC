import { getCookie } from '@/utils/cookie';
import axios from 'axios';

// Criação do cliente Axios
export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // ajuste conforme necessário
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para adicionar o token ao header Authorization
apiClient.interceptors.request.use((config) => {
    const token = getCookie('token'); // Função para obter o token dos cookies
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

// Interceptor para tratar erro 401 (deslogar)
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 403) {
            // Remover token dos cookies
            document.cookie = 'token=; Max-Age=0; path=/;';
            // Redirecionar para login (ajuste conforme necessário)
            window.location.href = '/entrar';
        }
        return Promise.reject(error);
    }
);