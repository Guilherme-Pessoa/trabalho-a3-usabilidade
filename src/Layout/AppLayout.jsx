export default function AppLayout(props) {
    return (
        <div className="relative min-h-screen bg-gray-200 pb-8">
            <title>
            {props.titulo}

            </title>
            
            <header className="p-2 mb-2 bg-sky-600 h-16">
                <img src="imagens/download.jpg" alt="Img nao suportada" width={66} className="" />
                <h1 className="cabecalho">Escola</h1>

            </header>

            <main className="container mx-auto bg-gray-500 p-2 rounded bg-white flex justify-center ">
                {props.children}
            </main>

            <footer className="absolute bottom-0 w-full bg-sky-600 text-center h-12">
                <span className="text-sm text-white">
                    Endereço da escola
                </span>
                <br />
                <span className="text-sm text-white">
                    CNPJ
                </span>
            </footer>

        </div>
    )
}

