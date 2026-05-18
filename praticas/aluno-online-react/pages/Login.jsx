import logo from "../src/assets/learn.svg"
import FormLogin from "../src/components/FormLogin";
import './Login.css'
function Login({navegaPara}) {
    return(
        <>
        <main className="login">
            <img src={logo}/>
            <h1>Aluno Online</h1>
            <FormLogin navegaPara={navegaPara}/>
        </main>

         <footer>© 2026. Todos os direitos reservados</footer> 
         </>
    )
}

export default Login;