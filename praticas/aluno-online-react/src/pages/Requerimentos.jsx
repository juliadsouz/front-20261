import { Link, Outlet } from 'react-router';
import { useEffect, useState } from 'react';
import Topbar from '../components/Topbar';
import { listarRequerimentos } from '../services/requerimentoService';

function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([]);

  useEffect(() => {
    async function carregarRequerimentos() {
      const requerimentos = await listarRequerimentos();
      setRequerimentos(requerimentos);
    }

    carregarRequerimentos();
  }, []);

  return (
    <main>
      <Topbar titulo="Meus Requerimentos" />

      <Link to="requerimentoForm">
        <button className='btn-submit'> ➕ Novo Requerimento
        </button>
      </Link>
      
<Outlet />
       <table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Descrição</th>
      <th>Data</th>
    </tr>
  </thead>

  <tbody>
    {requerimentos.map((req) => (
      <tr key={req.id}>
        <td>{req.tipo}</td>
        <td>{req.descricao}</td>
        <td>{req.data}</td>
      </tr>
    ))}
  </tbody>
</table>

 
    </main>
  );
}

export default Requerimentos;