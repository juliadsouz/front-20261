import "./Menu.css";
import { NavLink } from "react-router";
import useAuthContext from "../contexts/useAuthContext";

function Menu() {
  const {logout} = useAuthContext();

  function handleSair() {
    logout();
  }

  return (
    <nav>
     
      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/faltas">Faltas</NavLink>
        </li>

        <li>
          <NavLink to="/notas">Notas</NavLink>
        </li>

        <li>
          <NavLink to="/boletos">Boletos</NavLink>
        </li>

        <li>
          <NavLink to="/requerimentos">
            Requerimentos
          </NavLink>
        </li>

        <li>
          <NavLink to="/" onClick={handleSair}>
            Sair
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;