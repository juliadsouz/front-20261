import Sidebar from '../components/Sidebar'
import TabelaFaltas from '../components/TabelaFaltas';
import Topbar from '../components/Topbar'

function Faltas() {
    const colunas = [
        "Disciplina",
        "Faltas",
        "Presença"
    ]
    const notas = [
    [
        ["BI e Data Warehousing", "0", "100%"],
        ["Construção de FrontEnd", "0", "100%"],
        ["Devops", "0", "100%"],
        ["Manutenção de Software e Devops", "0", "100%"],
    ],
    [
        ["Estrutura de Dados", "5.5", "5.5", "", "MM"],
        ["Construção de Backend", "0.0", "6.0", "4.0", "MM"],
        ["Gerenciamento de Projetos", "27","87.5%"],
    ],
    [
        ["Engenharia de Software", "5.5", "5.5", "", "MM"],
        ["Dispositivos Moveis", "0.0", "6.0", "4.0", "MM"],
        ["Estaística", "8.0", "9.0", "", "MS"],
    ],
]
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