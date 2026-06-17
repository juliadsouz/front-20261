import './Topbar.css'
import useAuthContext from "../contexts/useAuthContext";

function Topbar({titulo}) {
  const { usuario } = useAuthContext();

 return (
    <div>
        <header>
      <h1>{titulo}</h1>
      
      <div className="perfil">
      <img src="../src/assets/avatar.svg" width="64" />
      <div className="usuario-info">
  <h4>{usuario?.nome}</h4>
  <h5>{usuario?.email}</h5>
</div>
     </div>

      </header>
    </div>
)};

export default Topbar;