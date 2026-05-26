<<<<<<< HEAD:praticas/aluno-online-react/pages/Login.jsx
import logo from "../src/assets/learn.svg"
import FormLogin from "../src/components/FormLogin";
=======
import logo from "../assets/learn.svg"
import FormLogin from "../components/FormLogin";
>>>>>>> 1045f888627589664d474f45a84692171b3c9ec5:praticas/aluno-online-react/src/pages/Login.jsx
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