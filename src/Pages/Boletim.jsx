import AppLayout from "../Layout/AppLayout";
import { Link } from "react-router-dom"

export default function Boletim() {
    return (
        <AppLayout>

<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <div class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <h1 class="container py-6 px-1 mx-0 min-w-full flex flex-col items-center">
            BOLETIM
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
                    Turma
                </th>
                <th scope="col" class="py-3 px-6">
                    1° Nota
                </th>
                <th scope="col" class="py-3 px-6">
                    2° Nota
                </th>
                <th scope="col" class="py-3 px-6">
                    3° Nota
                </th>
                <th scope="col" class="py-3 px-6">
                    Media
                </th>
                <th scope="col" class="py-3 px-6">
                    Status
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
                    #1
                </td>
                <td class="py-4 px-6">
                    6,5
                </td>
                <td class="py-4 px-6">
                    8,6 
                </td>
                <td class="py-4 px-6">
                    7,5
                </td>
                <td class="py-4 px-6">
                    7,5
                </td>
                <td class="py-4 px-6">
                    Aprovado
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
                    #2
                </td>
                <td class="py-4 px-6">
                    5,5
                </td>
                <td class="py-4 px-6">
                    8,5 
                </td>
                <td class="py-4 px-6">
                    4,0
                </td>
                <td class="py-4 px-6">
                    6,0
                </td>
                <td class="py-4 px-6">
                    Aprovado
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
                    #2
                </td>
                <td class="py-4 px-6">
                    6,5
                </td>
                <td class="py-4 px-6">
                    8,6 
                </td>
                <td class="py-4 px-6">
                    7,5
                </td>
                <td class="py-4 px-6">
                    7,5
                </td>
                <td class="py-4 px-6">
                    Aprovado
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
                    #1
                </td>
                <td class="py-4 px-6">
                    5,5
                </td>
                <td class="py-4 px-6">
                    8,5 
                </td>
                <td class="py-4 px-6">
                    4,0
                </td>
                <td class="py-4 px-6">
                    6,0
                </td>
                <td class="py-4 px-6">
                    Aprovado
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

<div class="container py-5 px-2 mx-0 min-w-full flex flex-col items-center">
    <Link to="/Nota">
        <button class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Lançar nova nota
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