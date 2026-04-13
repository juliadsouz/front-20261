import Sidebar from '../components/Sidebar'
import TabelaRequerimentos from '../components/TabelaRequerimentos';
import Topbar from '../components/Topbar'

function Requerimentos() {
    return (
       <div className='center'>
        <Sidebar />
        
        <main>
        <Topbar titulo="Meus Requerimentos" />

    <h2> Faça a solicitação online para a secretaria </h2>

    <TabelaRequerimentos />    
    </main>
    </div>
    );
}

export default Requerimentos;

