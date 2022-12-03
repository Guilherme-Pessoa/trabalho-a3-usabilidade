import AppLayout from "../Layout/AppLayout";
import { Link } from "react-router-dom"

export default function CadastroTurma() {
    return (
        <AppLayout>
            <div className="App area">
            
            
            <Link to="/" className='botao'>
                        Voltar para o inicio
                    </Link>
            
            
            </div>


        </AppLayout>
    )
}