import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// URL de l'API (remplace localhost par ton IP si tu es en dev)
const API_URL = 'http://192.168.1.109:3000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Ajouter automatiquement le token JWT pour chaque requête
api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;