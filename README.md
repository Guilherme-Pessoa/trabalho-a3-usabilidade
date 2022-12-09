# (A3) Usabilidade, desenvolvimento web, mobile e jogos: 

## Apresentação
Esse projeto foi realizado pelos alunos da turma de Usabilidade, desenvolvimento web, mobile e jogos do turno noturno da UNIFACS (Nomes e RA's dos alunos no arquivo PDF)

## Descrição
Este projeto possui o propósito de realizar um sistema escolar onde você possar criar, ler, atualizar e deletar registros.

## Tecnologias Utilizadas
* React;
* Node.js;
* Express;
* MySQL;
* Vite (Ferramenta de construção ao qual utilizamos para criar o projeto com o React);
* Tailwind (Framework de estilização).

## Pré-Requisitos
* Possuir instalado em sua máquina uma IDE, como o VsCode;
* Clonar este repositório em sua máquina:

HTTPS:
```
git clone https://github.com/Guilherme-Pessoa/trabalho-a3-usabilidade.git
```

## Bibliotecas e outras dependências
Após clonar este repositório e o abrir em sua IDE de preferência, será necessário que digite em seu
terminal os seguintes comandos:

* Para abrir a pasta do servidor:

SERVER:
```
cd server
```

* Para instalar as dependências esperadas dentro da pasta:

DEPENDÊNCIAS:
```
npm install
```

* Para inicializar o servidor:

INICIALIZAR O SERVIDOR:
```
npm start
```

* Agora inicialize um segundo terminal, que por padrão virá na raiz do projeto, e instale as dependências esperadas:

DEPENDÊNCIAS:
```
npm install
```

* Importe a biblioteca Axios:

AXIOS:
```
npm install axios
```

* Para inicializar o projeto:

INICIALIZAR O projeto:
```
npm run dev
```

## Introdução as funcionalidades do sistema
Estando na página inicial, você irá se deparar com as primeiras funcionalidades disponíveis, que são botões que te conduzem as rotas desejadas. Abordaremos um pouco a cerca das páginas para proporcionar uma contextualização:

![TelaDeHome](https://user-images.githubusercontent.com/96211934/206812045-ca6b0377-2922-4c42-bf84-885fd1341838.png)


<details open>
  <summary>
    <b>Consultar Aluno</b>
  </summary>
  
 ![TelaConsultarAluno](https://user-images.githubusercontent.com/96211934/206812114-8bcc7b26-1a46-48c3-873f-810475511872.png)


- Funcionalidade: Nesta tela você poderá consultar os alunos matriculados no sistema, poderá editar seus registros, os deletar, ou cadastrar novos alunos.

![TelaCadastroAluno](https://user-images.githubusercontent.com/96211934/206812161-e2d812e0-be76-42b3-8b1a-baae927cef0c.png)

</details>

<details open>
  <summary>
    <b>Consultar Turmas</b>
  </summary>
  
![TelaConsultarTurma](https://user-images.githubusercontent.com/96211934/206812248-b871cc42-9e5d-404f-b43a-d726d4fd81b1.png)


- Funcionalidade: Nesta tela você poderá consultar as turmas criadas no sistema, poderá editar seus registros, os deletar, ou cadastrar novos turmas.

![TelaCadastroTurma](https://user-images.githubusercontent.com/96211934/206812273-0271d7e9-d874-4f39-a3a5-69ca10afd6d6.png)

</details>

<details open>
  <summary>
    <b>Boletim</b>
  </summary>
  
![TelaBoletim](https://user-images.githubusercontent.com/96211934/206812307-27326e31-f52f-446c-826d-4e233f1da365.png)

- Funcionalidade: Nesta tela você poderá consultar os boletins dos alunos no sistema, poderá editar seus registros, os deletar, ou lançar novas notas.

![TelaNotas](https://user-images.githubusercontent.com/96211934/206812340-99e5177d-b093-45eb-b058-3377f504e9e9.png)

</details>
