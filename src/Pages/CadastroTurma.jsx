import AppLayout from "../Layout/AppLayout";
import { Link } from "react-router-dom"

export default function CadastroTurma() {
    return (
        <AppLayout>
            <div className="App area">

            <div class="block uppercase tracking-wide text-black-800 text-xs font-bold mb-2">
                <h1 class="container py-6 px-1 mx-0 min-w-full flex flex-col items-center">
                    Cadastro da Turma
                </h1>
            </div>

<form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Primeiro Nome
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Alan"></input>
      <p class="text-red-500 text-xs italic">Por favor, preencha este campo.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Sobrenome
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Turing"></input>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        CPF do Professor(a)
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"></input>
      <p class="text-gray-600 text-xs italic">O CPF deve ser digitada neste campo</p>
    </div>
  </div>
</form>

<div class="inline-block relative w-64">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        T??tulo Acad??mico
</label>
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Bacharel</option>
    <option>Mestre</option>
    <option>Doutor</option>
    <option>PhD</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>

<div class="inline-block relative w-64">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Disciplina
</label>
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Portugu??s</option>
    <option>Matem??tica</option>
    <option>Hist??ria</option>
    <option>Ci??ncias</option>
    <option>Geografia</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>

<div class="my-6">
<div class="inline-block relative w-64">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Sala
</label>
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>M??dulo 1</option>
    <option>M??dulo 2</option>
    <option>M??dulo 3</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>

<div class="inline-block relative w-64">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Quantidade de Alunos por Turma
</label>
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>20</option>
    <option>35</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
</div>

<div class="container py-5 px-2 mx-0 min-w-full flex flex-col items-center">
  <Link to="/">
    <button class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Cadastrar Turma
    </button>
  </Link>
</div>

<div class="container py-0 px-0 mx-0 min-w-full flex flex-col items-center">
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