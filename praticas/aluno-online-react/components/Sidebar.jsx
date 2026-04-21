import './Sidebar.css'
import Menu from "./Menu"

function Sidebar(props) {
    return (
        <div className= 'sidebar'>
          
        <header>
          <img src="../src/assets/learn.svg" alt="Icone do Capelo"/>
          <h3>Aluno Online</h3>
        </header>

         <Menu navegaPara={props.navegaPara}/>
        </div>
    )
}

export default Sidebar;