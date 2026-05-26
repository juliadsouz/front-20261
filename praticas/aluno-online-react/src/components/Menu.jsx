<<<<<<< HEAD
import './Menu.css';
import { NavLink} from 'react-router';


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
=======
import './Menu.css'
import { NavLink} from 'react-router';

function Menu() {
  return (
    <nav>
      <ul>
        <li> <NavLink to="/dashboard">Dashboard </NavLink> </li>
>>>>>>> 1045f888627589664d474f45a84692171b3c9ec5
              <li> <NavLink to="/faltas"> Faltas </NavLink> </li>
              <li> <NavLink to="/notas"> Notas </NavLink> </li>
              <li> <NavLink to="/boletos"> Boletos </NavLink> </li>
              <li> <NavLink to="/requerimentos"> Requerimentos </NavLink> </li>
<<<<<<< HEAD
              <li><a onClick={handleSair}>Sair</a></li>

          </ul>

      </nav>
  );
}

export default Menu;
=======
              <li><a>Sair</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
>>>>>>> 1045f888627589664d474f45a84692171b3c9ec5
