import Sidebar from '../components/Sidebar'
import Tabela from '../components/Tabela'
import Topbar from '../components/Topbar'

function Requerimentos() {
    const colunas = [
        "Tipo de Requerimento",
        "Data de Solicitação",
        "Situação"
    ]

    const req = [
        ["Revisão de Menção", "15/12/2025", "Indeferido"],
        ["Dispensa de Disciplina", "12/06/2025", "Indeferido"],
        ["Trancamento de Matricula", "12/06/2025", "Deferido"],
        ["Revisão de Menção", "05/01/2024", "Indeferido"],
        ["Mudança de Turno", "10/10/2023", "Deferido"],
        ["Renovação de Matricula", "20/02/2023", "Deferido"],
       
    ]
    return (
       <div className='center'>
        <Sidebar />
        
        <main>
        <Topbar titulo="Meus Requerimentos" />

    <h2> Faça a solicitação online para a secretaria </h2>

    <Tabela colunas={colunas} dados={req}/>

    </main>
    </div>
    );
}

export default Requerimentos;

