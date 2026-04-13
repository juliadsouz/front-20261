import Sidebar from '../components/Sidebar'
import TabelaFaltas from '../components/TabelaFaltas';
import Topbar from '../components/Topbar'

function Faltas() {
    return (
   <div className='center'>
        <Sidebar />
        
        <main>
        <Topbar titulo="Minhas Faltas" />

    <h2> Histórico de Faltas por semestre </h2>

    <TabelaFaltas />    
    </main>
    </div>
    )
}

export default Faltas;