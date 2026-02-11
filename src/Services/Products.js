import axios from 'axios';  

const api = axios.create({
    baseURL: 'https://localhost:7104/api' // Address
});

export const GetAllProducts = async () => {
    const response = await api.get('/Product/all-products')
    
    return response.data.value.map(p => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price.amount,
        currency: p.price.currency,
        weight: p.weight
    }));
}

export const GetProductById = async (id)=> {
    const response = await api.get(`/Product/${id}`)

    const p = response.data;

    return {
        name: p.name ?? "N/A",
        description: p.description ?? "N/A",
        price: p.price.amount ?? 0,
        currency: p.price.currency ?? "BRL",
        weight: p.weight ?? 0
    };
}

export const GetProductByPrice = async (price) => {
    const response = await api.get(`/Product/Product-by-price`)

    const p = response.data;

    return {
        name: p.name ?? "N/A",
        description: p.description ?? "N/A",
        price: p.price.amount ?? 0,
        currency: p.price.currency ?? "BRL",
        weight: p.weight ?? 0
    };
}

export const GetProductByWeight = async (weight) => {
    const response = await api.get(`/Product/Product-by-weight`)

    const p = response.data;

    return {
        name: p.name ?? "N/A",
        description: p.description ?? "N/A",
        price: p.price.amount ?? 0,
        currency: p.price.currency ?? "BRL",
        weight: p.weight ?? 0
    };
}