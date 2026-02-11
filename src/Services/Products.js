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
    return response.data.value.map(p => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price.amount,
        currency: p.price.currency,
        weight: p.weight
    }))
};

export const GetProductByPrice = async (price) => {
    const response = await api.get(`/Product/Product-by-price`)
    return response.data.value.map(p => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price.amount,
        currency: p.price.currency,
        weight: p.weight
    }))
};

export const GetProductByWeight = async (weight) => {
    const response = await api.get(`/Product/Product-by-weight`)
    return response.data.value.map(p => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price.amount,
        currency: p.price.currency,
        weight: p.weight
    }))
};