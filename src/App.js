import './App.css';
import CarregarUsuario from './components/CarregarUsuario';
// import Header from './components/Header';
// import Contador from './components/Contandor';
// import Dados from './components/Dados';
// import Funcionario from './components/Functionario';
// import Pessoa from './components/Pessoa';
// import Form from './components/Form';
// import Login from './components/Login';
// import Carro from './components/Carro';
// import ExemploUseEffect from './components/ExemploUseEffect';
// import Texto from './components/Texto';
//import Hora from './components/Hora';
//import Mock from './components/Mock';
import ExemploAxiosGet from './components/axios/ExemploAxiosGet';
//import ExemploAxioxGetId from './components/axios/ExemploAxiosGetId';
//import ExemploAxiosPost from './components/axios/ExemploAxiosPost';

function App() {
  return (
    <div className="App">
       <Header titulo="Cálculo do IMC" />
      <Form /> 
       <Pessoa />
      <Contador />
      <Funcionario />
      <Dados /> 
      {/* <Login /> */}
      {/* <Carro /> */}
      {/* <ExemploUseEffect /> */}
      {/* <Texto /> */}
      {/* <Hora /> */}
      <CarregarUsuario />
      {/* <Mock /> */}
      { <ExemploAxiosGet /> }
      {/*<ExemploAxiosPost />*/}
      {/*<ExemploAxioxGetId />*/}
    </div>
  );
}

export default App;






