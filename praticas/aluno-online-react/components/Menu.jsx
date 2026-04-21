import './Menu.css'

function Menu({ navegaPara }) {
  return (
    <nav>
      <ul>
        <li><a href="#" onClick={(e) => navegaPara(1)}>Dashboard</a></li>
        <li><a href="#" onClick={(e) => navegaPara(2)}>Notas</a></li>
        <li><a href="#" onClick={(e) => navegaPara(3)}>Faltas</a></li>
        <li><a href="#" onClick={(e) => navegaPara(4)}>Boletos</a></li>
        <li><a href="#" onClick={(e) => navegaPara(5)}>Requerimentos</a></li>
        <li><a href="#" onClick={(e) => navegaPara(0)}>Sair</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
