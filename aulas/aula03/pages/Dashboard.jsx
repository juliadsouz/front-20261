import Dashboard from "../../../praticas/aluno-online-react/pages/Dashboard"
import Main from "../components/Main"
import Sidebar from "../components/Sidebar"

function Dashboard() {
    const avisos =[
        "Eleições para representante de turma",
        "Inscrição para projeto de extensão"
    ]
    const datas = []
    const disciplinas = [
        "Construção de Frontend",
        "DevOps",
        "Business Intelligence"
    ]

    return (
        <>
        <Sidebar />

        <Main titulo="Olá, Aluno" />
        </>
    )
}
export default Dashboard;