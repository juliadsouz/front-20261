import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = (dados) => {
    setUsuario(dados);
    setLogado(true);
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider
      value={{ logado, usuario, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;