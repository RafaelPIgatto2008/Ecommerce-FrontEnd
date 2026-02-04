import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "./Pages/Cadastro.jsx";
import Login from "./Pages/Login.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/cadastro" />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;