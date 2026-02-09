import { useNavigate } from "react-router-dom";
import "../assets/CSS/Navbar.css";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <header className="navbar">
            <div className="nav-logo" onClick={() => navigate("/home")}>
                Ecommerce
            </div>

            <nav className="nav-links">
                <button onClick={() => navigate("/home")}>Explorar</button>
                <button onClick={() => navigate("/login")}>Login</button>
            </nav>
        </header>
    );
}
