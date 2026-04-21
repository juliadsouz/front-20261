import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import './Dashboard.css'

function Dashboard({ navegaPara }) {
    return (
    <div className= 'center'>
        <Sidebar navegaPara={navegaPara}/>

        <main>
        <Topbar titulo="Olá, Aluno!" />

        <h2>Bem-vindo ao portal do aluno</h2>

        <Card />
    </main>
    </div>
    )}

    export default Dashboard;