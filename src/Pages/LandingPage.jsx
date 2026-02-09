import { useNavigate } from 'react-router-dom';
import "../assets/CSS/Base.css"
import "../assets/CSS/LadinPage.css"
import Navbar from "../Components/Navbar.jsx";

export default function LadingPage(){
    const navigate = useNavigate();
    
    return (
        <div className="container landing-container">
            
            <Navbar />
            
            <div className = "box-lading">
                <main className="landing-main">
                    <h1>Ecommerce</h1>

                    <p className="subtitle">
                        Venda rápido. Gerencie fácil. Cresça seguro.
                    </p>

                    <div className="features">
                        <span>⚡ Checkout rápido</span>
                        <span>🔒 Pagamentos seguros</span>
                        <span>📦 Gestão simples</span>
                    </div>
                    
                    <div className="actions">
                        <button
                            className="btn-cadastrar"
                            onClick={() => navigate("/cadastro")}
                        >
                            Criar conta
                        </button>
                        
                        <button className="btn-cadastrar" 
                                onClick={() => navigate("/")}
                        >
                            Conhecer o site
                        </button>
                    </div>
                    
                </main>
            </div>
        </div>
    )
}