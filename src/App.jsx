import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [mensagem, setMensagem] = useState("Carregando...")

    useEffect(() => {
        // Substitua pela URL real do teu Controller no C#
        axios.get('http://localhost:5173')
            .then(res => setMensagem("Conectado ao Back-end com sucesso!"))
            .catch(err => setMensagem("Erro ao conectar: " + err.message))
    }, [])

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>{mensagem}</h1>
            <p>Se aparecer 'Conectado', a porteira do CORS tá aberta!</p>
        </div>
    )
}

export default App