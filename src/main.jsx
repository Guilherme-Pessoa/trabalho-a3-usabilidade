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
  }
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
)
