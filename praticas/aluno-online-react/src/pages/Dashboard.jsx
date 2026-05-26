import Card from "../src/components/Card";
import Sidebar from "../src/components/Sidebar";
import Topbar from "../src/components/Topbar";
import './Dashboard.css'

function Dashboard() {
    return (

    <main>
        <Topbar titulo="Olá, Aluno!" />

        <h2>Bem-vindo ao portal do aluno</h2>

        <Card />
    </main>
 
    )}

    export default Dashboard;