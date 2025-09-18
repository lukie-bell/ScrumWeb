//ELi: recoratorio agregar las pages !! -_-
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioCompleto from "../src/pages/inicioPage";
import SGCSCompleto from "../src/pages/SGCSPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioCompleto/>} />
        <Route path="/SGCS" element={<SGCSCompleto/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
