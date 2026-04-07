import Sidebar from '../components/Sidebar'
import Tabela from '../components/Tabela'
import Main from '../components/Main'
function Notas() {
    const colunas = [
        "Disciplina",
        "A1",
        "A2",
        "A3",
        "Menção"
    ];
    const notas = [
        ["BI e Data Warehousing", "","","","SR"],
        ["Construção de Frontend", "","","","SR"],
        ["DevOps","","","", "SR"]
    ]
    return (
        <>
            <Sidebar />
        <Main titulo= 'Minha Notas'
        subtitulo= 'Histórico de notas por semestre'>

        <Tabela titulo='2026.1' colunas={colunas} dados={notas[0]}/>
        <Tabela titulo='2025.2' />
        <Tabela titulo='2025.1' />
        </Main>
        </>
    );
}

export default Notas;

