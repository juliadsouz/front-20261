import { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css'

import Layout from "./layouts/Layout";
import Dashboard from "../pages/Dashboard";
import Faltas from "../pages/Faltas";
import Notas from "../pages/Notas";
import Boletos from "../pages/Boletos";
import Requerimentos from "../pages/Requerimentos";
import Login from "../pages/Login";

function App() {

return (
  <Routes>
    <Route path="/" element={<Layout />}>
     <Route path="dashboard" element={<Dashboard/>}/>
     <Route path="faltas" element={<Faltas/>}/>
     <Route path="notas" element={<Notas/>}/>
     <Route path="boletos" element={<Boletos/>}/>
     <Route path="requerimentos" element={<Requerimentos/>}/>
    </Route>
    <Route path="/login" element={<Login/>}/>
  </Routes>
);
}
export default App;