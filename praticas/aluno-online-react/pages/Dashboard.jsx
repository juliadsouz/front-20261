import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import './Dashboard.css'

function Dashboard() {
    return (
    <body class= 'dashboard'>
        <Sidebar />
        <Topbar titulo="Olá, Aluno!" />

        <h2>Bem-vindo ao portal do aluno</h2>

        <Card />

    </body>
    )}

    export default Dashboard;