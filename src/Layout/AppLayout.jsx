import { Link } from "react-router-dom";

export default function AppLayout(props) {
    return (
        <div className="">
            <title>
            {props.titulo}

            </title>
            
<nav class="bg-white border-gray-200 dark:bg-sky-600">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a  class="flex items-center">
            <img src="imagens/school.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Escola A3</span>
        </a>
        <div class="flex items-center">
            <a href="tel:5541251234" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">CONTATO: (71) 99999-9999</a>
        </div>
    </div>
</nav>
<nav class="bg-gray-50 dark:bg-sky-900">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <a href="/" class="text-gray-900 dark:text-white hover:underline">INICIO</a>
                </li>
                <li>
                    <a href="/ConsultaAluno" class="text-gray-900 dark:text-white hover:underline">CONSULTAR ALUNOS</a>
                </li>
                <li>
                    <a href="/ConsultaTurma" class="text-gray-900 dark:text-white hover:underline">CONSULTAR TURMAS</a>
                </li>
                <li>
                    <a href="/Boletim" class="text-gray-900 dark:text-white hover:underline">BOLETIM</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

            <main className="container mx-auto p-2 flex justify-center ">
                {props.children}
            </main>

<footer class="bg-green-500 text-center lg:text-left">
  <div class="container p-6 text-black">
    <div class="grid lg:grid-cols-2 gap-4">
    <div class="mb-6 md:mb-0">
        <span class="font-medium mb-2 uppercase">CNPJ: </span>

        <p class="mb-4">
            07.960.956/0001-84
        </p>
      </div>

      <div class="mb-6 md:mb-0">
        <span class="font-medium mb-2 uppercase">ENDEREÇO: </span>

        <p class="mb-4">
          Rua N° 12 da Picket Post Close, em Martins Heron, na cidade de Bracknell.
        </p>
      </div>
    </div>
  </div>

  <div class="text-center text-black-700 p-4 bg-green-900">
    <span class="text-white">
        © 2022 Copyright: A3 School por Ariel Soares, Cleison Rocha, Guilherme Pessoa e Renan Abreu
    </span>
  </div>
</footer>

        </div>
    )
}

