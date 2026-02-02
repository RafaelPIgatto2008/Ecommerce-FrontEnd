import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7104/api' // Addres
});

export const registerUser = async (dadosUsuario) => {
    console.log("O que o React tá enviando pro C#:", dadosUsuario);
    const response = await api.post('/User/Cadastro', dadosUsuario);
    return response.data;
};