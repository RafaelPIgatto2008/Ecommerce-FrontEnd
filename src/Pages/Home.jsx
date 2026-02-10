import Navbar from "../components/Navbar";
import "../assets/CSS/Home.css";
import { GetAllProducts } from "../Services/Products.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function loadProducts() {
            const response = await GetAllProducts();

            setProducts(response ?? []);
            console.log(response);
            setLoading(false);
        }
        
        loadProducts();
    }, []);


    return (
        <>
            <Navbar />

            <section className="banner">
                <h1>Os melhores produtos em um só lugar</h1>
            </section>

            <main className="products-container">
                <h2>Produtos em destaque</h2>

                <div className="products-grid">
                    {products.map((produto) => (
                        <div key={produto.id} className="product-card">
                            <h3>{produto.name}</h3>

                            <span>
                                R$ {produto.price.toFixed(2)}
                            </span>
                            
                            <button onClick={() => navigate(`/productdetails/${produto.id}`)}>
                                Ver produto
                            </button>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="footer">
                © {new Date().getFullYear()} Ecommerce
            </footer>
        </>
    );
}
