import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProductById } from "../Services/Products";
import Navbar from "../components/Navbar";
import "../assets/CSS/ProductDetails.css";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProduct() {
            try {
                const response = await GetProductById(id);

                setProduct(response.data);
            } 
            catch (error) {
                console.log("ID da rota:", id);
                console.error("Erro ao buscar produto", error);
            } 
            finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [id]);

    if (loading) return <p>Carregando produto...</p>;
    if (!product) return <p>Produto não encontrado</p>;

    return (
        <>
            <Navbar />

            <main className="product-details">
                <h1>{product.name}</h1>

                <p className="price">
                    R$ {product.price.amount.toFixed(2).replace(".", ",")}
                </p>

                <p className="description">
                    {product.description}
                </p>

                <p className="weight">
                    Peso: {product.weight} kg
                </p>

                <button className="btn-buy">
                    Adicionar ao carrinho
                </button>
            </main>
        </>
    );
}
