import './Menu.css';
import { NavLink, useNavigate } from 'react-router';


function Menu() {

    const handleSair = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    }
    
  return (
      <nav>

          <ul>

              <li> <NavLink to="/dashboard">Dashboard </NavLink> </li>
              <li> <NavLink to="/faltas"> Faltas </NavLink> </li>
              <li> <NavLink to="/notas"> Notas </NavLink> </li>
              <li> <NavLink to="/boletos"> Boletos </NavLink> </li>
              <li> <NavLink to="/requerimentos"> Requerimentos </NavLink> </li>
              <li><a href="#" onClick={handleSair}>Sair</a></li>

          </ul>

      </nav>
  );
}

export default Menu;