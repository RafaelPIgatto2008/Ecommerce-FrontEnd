import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7104/api' // Addres
});

export const registerUser = async (dadosUsuario) => {
    const response = await api.post('/Auth/Cadastro', dadosUsuario);
    return response.data;
};

export const loginUser = async (dataUser) => {
    const response = await api.post('/Auth/Login', dataUser);
    return response.data;
}