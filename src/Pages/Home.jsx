import Navbar from "../components/Navbar";
import "../assets/CSS/Home.css";
import { GetAllProducts } from "../Services/Products.js";
import { useEffect, useState } from "react";

export default function Home() {
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function loadProducts() {
            const response = await GetAllProducts();
            
            setProducts(response ?? []);
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
                    {products.map((produto, index) => (
                        <div key={index} className="product-card">
                            <h3>{produto.name}</h3>

                            <span>
                                R$ {produto.price.toFixed(2)}
                            </span>

                            <button>Ver produto</button>
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
