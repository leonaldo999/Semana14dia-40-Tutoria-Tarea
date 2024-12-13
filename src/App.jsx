import './App.css'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { Equipo } from './pages/equipo/Equipo'
import { Home } from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
      {/* Navegacion */}
      <nav className='nav text-xl text-right'>
        <ul className='nav-items'>
          <li className='nav-item'> <Link to='/'>Home</Link> </li>
          <li className='nav-item'> <Link to='/equipo'>Plantilla</Link> </li>
        </ul>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App