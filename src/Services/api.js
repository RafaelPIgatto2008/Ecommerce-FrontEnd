import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7104/api' // O endereço que tu achou no C#
});

export const getProdutos = async () => {
    const response = await api.get('/produtos');
    return response.data;
};