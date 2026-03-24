import './App.css';
import logo from './assets/learn.svg';

function App (){
  return (
    <main>
    <img src={logo} alt='Logotipo da aplicação' />
    <h1>Aluno Online</h1>
    <label htmlfor="matricula">Matricula</label>
    <input type="number" id="matricula" 
      name="matricula"/>
    <label for="senha">Senha</label>
    <input type="password" id="senha"
      name="senha"/>
      <button type="submit">Entrar</button>
  </main>
  );
}
export default App;
