import AppLayout from "../Layout/AppLayout"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <AppLayout>
            
            <div className='items-center'>
                <div className="App area">

                    <Link to="ConsultaAluno" className='botao'>
                        Consultar Alunos
                    </Link>

                    <Link to="ConsultaTurma" className='botao'>
                        Consultar Turmas
                    </Link>

                    <Link to="Boletim" className='botao'>
                        Boletim
                    </Link>

                </div>
            </div>
        </AppLayout>

    )
}