import axios from "axios";
import { api } from "./products"; // Import the address

export const AddItemToCart = async () => {
    const response = await api.post('/Order/Add-item-cart')

    const p = response.data

    return {
        Name: p.Name,
        Price: p.Price,
        Description: p.Description
    };
}

export const RemoveItemCart = async () => {
    const response = await api.post('/Order/Remove-item-cart')

    return response
}

export const ShowCart = async () => {
    const response = await api.get('/Order/Show-cart')

    return response
}