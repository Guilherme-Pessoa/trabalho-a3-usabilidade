import AppLayout from "../Layout/AppLayout";
import { Link } from "react-router-dom"

export default function ConsultaAluno() {
    return (
        <AppLayout>
            <div className="App area">

                <form class="mx-4 flex items-center">   
                    <label for="simple-search" class="sr-only">Pesquisar Aluno</label>
                    <div class="mx-4 relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquisar Aluno" required></input>
                    </div>
                    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only"></span>
                    </button>
                </form>

<div class="my-4 overflow-x-auto relative shadow-md sm:rounded-lg">
    <div class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <h1 class="container py-6 px-1 mx-0 min-w-full flex flex-col items-center">
            ALUNOS CADASTRADOS
        </h1>
    </div>

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Nome do Aluno
                </th>
                <th scope="col" class="py-3 px-6">
                    Matrícula
                </th>
                <th scope="col" class="py-3 px-6">
                    CPF
                </th>
                <th scope="col" class="py-3 px-6">
                    Sala
                </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Deletar</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ariel Soares
                </th>
                <td class="py-4 px-6">
                    1272125460
                </td>
                <td class="py-4 px-6">
                    899.645.380-30
                </td>
                <td class="py-4 px-6">
                    Módulo 1
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Apagar</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Cleison Rocha
                </th>
                <td class="py-4 px-6">
                    1272122258
                </td>
                <td class="py-4 px-6">
                    869.957.430-40
                </td>
                <td class="py-4 px-6">
                    Módulo 1
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Apagar</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Guilherme Pessoa
                </th>
                <td class="py-4 px-6">
                    1272125255
                </td>
                <td class="py-4 px-6">
                    136.144.900-41
                </td>
                <td class="py-4 px-6">
                    Módulo 1
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Apagar</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Renan Abreu
                </th>
                <td class="py-4 px-6">
                    1272124565
                </td>
                <td class="py-4 px-6">
                    151.578.260-36
                </td>
                <td class="py-4 px-6">
                    Módulo 1
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Apagar</a>
                </td>
            </tr>
        </tbody>
    </table>                
</div>

<div class="container py-5 px-2 mx-0 min-w-full flex flex-col items-center">
    <Link to="/CadastroAlunos">
        <button class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Cadastrar Novo Aluno
        </button>
    </Link>
</div>

<div class="container py-4 px-0 mx-0 min-w-full flex flex-col items-center">
  <Link to="/">
    <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
      Voltar para o inicio
    </button>
  </Link>
</div>

</div>
        </AppLayout>
    )
}