import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

export default function Layout() {
  return (
    <div>
      <h1>Portal do Aluno</h1>

      <Menu />

     <Outlet />
    </div>
  );
}