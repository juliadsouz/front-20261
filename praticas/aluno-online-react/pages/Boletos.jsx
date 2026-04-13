import './Boletos.css'
import Sidebar from '../components/Sidebar'
import TabelaBoletos from '../components/TabelaBoletos';
import Topbar from '../components/Topbar'

function Boletos () {
return (
    <div className='center'>
        <Sidebar />
        
        <main>
        <Topbar titulo="Meus boletos" />

    <h2> Histórico de Pagamentos </h2>

    <TabelaBoletos />    
    </main>
    </div>
)
}

export default Boletos;