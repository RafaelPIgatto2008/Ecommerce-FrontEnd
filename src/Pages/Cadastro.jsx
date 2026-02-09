import { useState } from 'react'
import { registerUser} from "../Services/registerUser.js";
import { useNavigate } from "react-router-dom";
import "../assets/CSS/Base.css"
import "../assets/CSS/Cadastro.css"
import { toast } from "react-hot-toast";

function Cadastro () {
    const [form, setForm] = useState({
        Name: "",
        Email: "",
        Password: "",
    })

    const navigate = useNavigate();
    
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        
        try {
            const result = await registerUser(form);
            toast.success("Cadastrado com sucesso!");
            console.log(result.message)
            
            setTimeout(() => {
                navigate("/Login")}, 300);
        } catch (err) {
            toast.error("Erro ao cadastrar!");
            console.log(err)
        }
    }

    return (
        <div className="container cadastro-container">
            <div className="card">
                <div className="header">
                    <h2>Crie sua Conta Ecommerce</h2>
                    <p>Rápido, fácil e seguro</p>
                </div>

                <form onSubmit={handleSubmit} className="form-corpo">
                    <div className="input-group">
                        <label>Nome Completo</label>
                        <input
                            name="Name"
                            placeholder="Ex: Rafael Pigatto"
                            value={form.Name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>E-mail</label>
                        <input
                            name="Email"
                            type="email"
                            placeholder="seu@email.com"
                            value={form.Email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Senha</label>
                        <input
                            name="Password"
                            type="password"
                            placeholder="Mínimo 6 caracteres"
                            value={form.Password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="btn-cadastrar">
                        Finalizar Cadastro
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro