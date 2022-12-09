import Home from './Pages/Home'
import Boletim from './Pages/Boletim'
import CadastroTurma from './Pages/CadastroTurma'
import ConsultaAluno from './Pages/ConsultaAluno'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Nota from './Pages/Nota'
import CadastroAlunos from './Pages/CadastroAlunos'
import ConsultaTurma from './Pages/ConsultaTurma'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/ConsultaAluno",
    element: <ConsultaAluno/>
  },
   { path: "/CadastroTurma",
    element: <CadastroTurma/>
   },
    { path: "/Boletim",
     element: <Boletim/>
  },
    { path: "/Nota",
      element: <Nota/>
  },
    { path: "/CadastroAlunos",
      element: <CadastroAlunos/>
  },
    { path: "/ConsultaTurma",
      element: <ConsultaTurma/>
    }
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
)
