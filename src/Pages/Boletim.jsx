import AppLayout from "../Layout/AppLayout";
import { Link } from "react-router-dom"

export default function Boletim() {
    return (
        <AppLayout>

            <div>




                <Link to="/" className='botao'>
                    Voltar para o inicio
                </Link>



            </div>


        </AppLayout>
    )
}