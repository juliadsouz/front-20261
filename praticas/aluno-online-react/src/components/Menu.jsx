import './Menu.css'
import { NavLink, useNavigate } from 'react-router';

function Menu({ navegaPara }) {
  return (
    <nav>
      <ul>
        <li> <NavLink to="/dashboard">Dashboard </NavLink> </li>
              <li> <NavLink to="/faltas"> Faltas </NavLink> </li>
              <li> <NavLink to="/notas"> Notas </NavLink> </li>
              <li> <NavLink to="/boletos"> Boletos </NavLink> </li>
              <li> <NavLink to="/requerimentos"> Requerimentos </NavLink> </li>
              <li><a>Sair</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
