import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route  } from 'react-router-dom'

// import './index.css'

//Componentes:
import CardPerfil from './components/CardPerfil.jsx'
import BotaoVazado from './components/BotaoVazado.jsx'
import SelecaoPerfil from './components/SelecaoPerfil.jsx'
import MenuLateral from './components/MenuLateral.jsx'
import DetalhesConta from './components/DetalhesConta.jsx'
import BarraSuperiorConta from './components/BarraSuperiorConta.jsx'
import BarraDeNavegacao from './components/BarraDeNavegacao.jsx'

//Páginas:
import PageConta from './pages/PageConta'
import PageHome  from './pages/PageHome'
import PageSelecionarPerfil from './pages/PageSelecionarPerfil.jsx'




createRoot(document.getElementById('root')).render(

  <StrictMode>

    <BrowserRouter>

      <Routes>
        <Route path="/" element={< PageSelecionarPerfil/>} />
        <Route path="/conta" element={<PageConta />} />
        <Route path="/home" element={<PageHome />} />
      </Routes>

    </BrowserRouter>

  </StrictMode>,
)
