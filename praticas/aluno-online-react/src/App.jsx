import { Routes, Route } from 'react-router';
import './App.css'
import useAuthContext from "./contexts/useAuthContext";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";
import Login from "./pages/Login";
import RequerimentoForm from './forms/RequerimentoForm';

function App() {
    const { logado } = useAuthContext();
  return (
    <Routes>
    {!logado ? (
      <>
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Login/>} />
      </>
    ) : (
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="faltas" element={<Faltas />} />
          <Route path="notas" element={<Notas />} />
          <Route path="boletos" element={<Boletos />} />
          <Route path="requerimentos" element={<Requerimentos />} >

          <Route path="requerimentoForm" element={<RequerimentoForm/>} />
        </Route>
        </Route>

        <Route path="/login" element={<Dashboard />} />
      </>
    )}
  </Routes>
);
}
export default App;
