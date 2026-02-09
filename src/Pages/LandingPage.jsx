import { useNavigate } from 'react-router-dom';
import "../assets/CSS/Base.css"
import "../assets/CSS/LadinPage.css"

export default function LadingPage(){
    const navigate = useNavigate();
    
    return (
        <div className="container landing-container">
            <header className="landing-header">
                <h1 className="logo">Ecommerce</h1>

                <div className="auth-buttons">
                    <button
                        className="btn-link"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>

                    <button
                        className="btn-outline"
                        onClick={() => navigate("/cadastro")}
                    >
                        Cadastro
                    </button>
                </div>
            </header>

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
                    
                    <button
                        className="btn-cadastrar"
                        onClick={() => navigate("/cadastro")}
                    >
                        Criar conta
                    </button>
                </main>
            </div>
        </div>
    )
}