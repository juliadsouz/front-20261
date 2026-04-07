import Sidebar from '../components/Sidebar'
import TabelaNotas from '../components/TabelaNotas';
import Topbar from '../components/Topbar'

function Notas() {
    return (
       <div className='center'>
        <Sidebar />
        
        <main>
        <Topbar titulo="Minhas Notas" />

    <h2> Histórico de Pagamentos </h2>

    <TabelaNotas />  
    </main>
    </div>
    );
}

export default Notas;

