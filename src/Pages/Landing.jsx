import { useNavigate } from 'react-router-dom';
import "../assets/CSS/Base.css"
import "../assets/CSS/LadinPage.css"
import Navbar from "../Components/Navbar.jsx";

export default function LadingPage(){
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="hero">
                <h1>Ecommerce moderno e simples</h1>
                <p>
                    Plataforma desenvolvida para vender rápido, gerenciar fácil
                    e crescer com segurança.
                </p>

                <div className="hero-actions">
                    <button onClick={() => navigate("/cadastro")} className="btn-cadastrar">
                        Criar conta
                    </button>
                    <button onClick={() => navigate("/home")} className="btn-cadastrar">
                        Ver o site
                    </button>
                </div>
            </section>

            <section className="section">
                <h2>Por que usar?</h2>

                <div className="cards">
                    <div className="card">
                        ⚡ Checkout rápido e intuitivo
                    </div>
                    <div className="card">
                        🔒 Pagamentos seguros
                    </div>
                    <div className="card">
                        📦 Gestão simples de produtos
                    </div>
                </div>
            </section>

            <section className="section dark">
                <h2>Sobre o projeto</h2>
                <p className="about-text">
                    Este ecommerce foi desenvolvido com foco em
                    performance, simplicidade e boas práticas.
                    O objetivo é oferecer uma base sólida para quem quer vender
                    online sem complicação.
                </p>
            </section>

            <section className="section">
                <h2>Contato</h2>

                <div className="contact">
                    <p>📧 Email: <strong>rafaelrpigatto@email.com</strong></p>
                    <p>📱 WhatsApp: <strong>(55) 55 99985-1301</strong></p>
                </div>
            </section>

            <footer className="footer">
                © {new Date().getFullYear()} Ecommerce – Desenvolvido por Rafael Pigatto
            </footer>
        </>
    );
}