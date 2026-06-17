import { useState } from "react";
import { entrar } from "../services/authService";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
   const [logado, setLogado] = useState(
    localStorage.getItem("app.token"));
  const [usuario, setUsuario] = useState(localStorage.getItem("app.token"));

  const login = async (dados) => {
    const { token, mensagem } = await entrar(dados);

    if (token) {
      setUsuario({nome: dados.nome, email: dados.email, token});
      localStorage.setItem("app.token", token);
      setLogado(true);
      return;
    }

    throw new Error(mensagem);
  };

  const logout = () => {
    setUsuario({});
    localStorage.removeItem("app.token");
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>

  );
}

export default AuthProvider;