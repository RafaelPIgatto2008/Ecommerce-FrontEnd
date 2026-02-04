import { useState, useEffect } from 'react';
import { loginUser } from "../Services/registerUser.js";
import "../assets/CSS/Base.css"
import "../assets/CSS/Login.css"

function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const result = await loginUser(form);
            alert('Login sucessful');
            console.log(result.message)
        }catch (err) {
            alert("ERRO", err);
            console.log(err)
        }
    }

    return (
        <div className="container page login-container">
            <div className="card">
                <div className="header">
                    <h2>Entrar no Ecommerce</h2>
                    <p>Acesse sua conta com segurança</p>
                </div>

                <form onSubmit={handleSubmit} className="form-corpo">
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
                            placeholder="Sua senha"
                            value={form.Password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-cadastrar">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;