<<<<<<< HEAD
import { useState } from 'react';
=======
>>>>>>> 1045f888627589664d474f45a84692171b3c9ec5
import { Routes, Route } from 'react-router';
import './App.css'

import Layout from "./layouts/Layout";
<<<<<<< HEAD
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
    <Route index element={<Dashboard />} />
     <Route path="dashboard" element={<Dashboard/>}/>
=======
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";
import Login from "./pages/Login";

function App() {
  return (

  <Routes>
    <Route path="/" element={<Layout />}>

     <Route index element={<Dashboard/>} /> 
    <Route path="dashboard" element={<Dashboard/>}/>
>>>>>>> 1045f888627589664d474f45a84692171b3c9ec5
     <Route path="faltas" element={<Faltas/>}/>
     <Route path="notas" element={<Notas/>}/>
     <Route path="boletos" element={<Boletos/>}/>
     <Route path="requerimentos" element={<Requerimentos/>}/>
    </Route>
<<<<<<< HEAD
=======
    
>>>>>>> 1045f888627589664d474f45a84692171b3c9ec5
    <Route path="/login" element={<Login/>}/>
  </Routes>
);
}
<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 1045f888627589664d474f45a84692171b3c9ec5
