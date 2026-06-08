import logo from "../assets/learn.svg"
import FormLogin from "../components/FormLogin";
import './Login.css'


function Login() {
   
    return(
        <>
        <main className="login">
            <img src={logo}/>
            <h1>Aluno Online</h1>
            <FormLogin/>
        </main>

         <footer>© 2026. Todos os direitos reservados</footer> 
         </>
    )
}

export default Login;