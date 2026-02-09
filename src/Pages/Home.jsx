import Navbar from "../components/Navbar";
import "../assets/CSS/Home.css";

const produtosMock = [
    {
        id: 1,
        nome: "Notebook Gamer",
        preco: 4999.90,
        imagem: "https://via.placeholder.com/300"
    },
    {
        id: 2,
        nome: "Smartphone",
        preco: 2999.90,
        imagem: "https://via.placeholder.com/300"
    },
    {
        id: 3,
        nome: "Fone Bluetooth",
        preco: 399.90,
        imagem: "https://via.placeholder.com/300"
    }
];

export default function Home() {
    return (
        <>
            <Navbar />

            <section className="banner">
                <h1>Os melhores produtos em um só lugar</h1>
            </section>

            <main className="products-container">
                <h2>Produtos em destaque</h2>

                <div className="products-grid">
                    {produtosMock.map(produto => (
                        <div key={produto.id} className="product-card">
                            <img src={produto.imagem} alt={produto.nome} />
                            <h3>{produto.nome}</h3>
                            <span>
                                R$ {produto.preco.toFixed(2)}
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
