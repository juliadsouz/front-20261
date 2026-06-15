import { Link, Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
import Tabela from '../components/Tabela'
import Topbar from '../components/Topbar'

function Requerimentos() {
    return (
        
        <main>
        <Topbar titulo="Meus Requerimentos" />

    <Link to="requerimentoForm">
        <button className='btn-submit'>➕ Novo Requerimento</button>
      </Link>

 <Outlet />

    </main>
   
    );
}

export default Requerimentos;

