import AppLayout from "../Layout/AppLayout";
import { Link } from "react-router-dom"

export default function ConsultaAluno() {
    return (
        <AppLayout>
            <div className="App area">
                <div id="pesquisa">

                    <input type="text" id="txtBusca" placeholder="Digite a matricula do aluno" />
                    <button>Buscar</button>
                    
                    
                        
                        <table>
                            <thead>
                                <tr>
                                    <th>Aluno</th>
                                    <th>Matricula</th>
                                    <th>CPF</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >Guilherme</td>
                                    <td >10000</td>
                                    <td>00000000</td>
                                </tr>
                            </tbody>
                        </table>
                
                    </div>
                        
                

            
                
                
                
                <Link to="/" className='link'>
                Voltar para menu
                </Link>

                

            </div>
        </AppLayout>
    )
}