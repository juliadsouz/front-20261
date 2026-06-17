import { useState } from "react";
import { useNavigate } from "react-router";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import InputSubmit from "../components/InputSubmit"
import useAuthContext from "../contexts/useAuthContext";

import "./FormLogin.css";

function FormLogin() {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const [email, setemail] = useState("");
  const [senha, setSenha] = useState("");

  const [emailErro, setemailErro] = useState("");
  const [senhaErro, setSenhaErro] = useState("");

  const trataSubmit = async (e) => {
    e.preventDefault();

    setemailErro("");
    setSenhaErro("");

    let valido = true;

    if (!email) {
      setemailErro("O campo de email é obrigatório");
      valido = false;
    } 
    
    else if (
      !email.includes("@") ||
      !email.includes(".")
    ) {
      setemailErro("Email inválido");
      valido = false;
    }

    if (!senha) {
      setSenhaErro("O campo de senha é obrigatório");
      valido = false;
    } 
    
    else if (senha.length < 6) {
      setSenhaErro(
        "Senha deve ter no mínimo 6 caracteres"
      );
      valido = false;
    }

   if (valido) {
  try {
    await login({
      email,
      senha,
    });

    navigate("/");
  } catch {
    setSenhaErro("E-mail ou senha inválidos");
  }
}
  };

  return (
    <form onSubmit={trataSubmit}>
      <InputEmail
        email={email}
        erro={emailErro}
        mudaValor={(e) =>
          setemail(e.target.value)
        }
      />

      <InputSenha
        senha={senha}
        erro={senhaErro}
        mudaValor={(e) =>
          setSenha(e.target.value)
        }
      />

      <InputSubmit texto="Entrar" />
    </form>
  );
}

export default FormLogin;