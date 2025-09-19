//ELi: recoratorio agregar las pages !! -_-
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioCompleto from "../src/pages/inicioPage";
import SGCSCompleto from "../src/pages/SGCSPage";
import ProcesosPage from "../src/pages/ProcesosPage";
import MetodologiaPage from "../src/pages/MetodologiaPage";
import RecursosPage from "../src/pages/RecursosPage";
import NosotrosPage from "../src/pages/NosotrosPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioCompleto/>} />
        <Route path="/SGCS" element={<SGCSCompleto/>} />
        <Route path="/Procesos" element={<ProcesosPage/>} />
        <Route path="/Metodologia" element={<MetodologiaPage/>} />
        <Route path="/Recursos" element={<RecursosPage/>} />
        <Route path="/Nosostros" element={<NosotrosPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
