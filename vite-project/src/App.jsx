import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
// Define a função do componente principal App
function App() {
  // Retorna a estrutura de roteamento usando o BrowserRouter
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />       
        <Route path="/home" element={<Home />} />  
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}
// Exporta o componente App como padrão
export default App;
