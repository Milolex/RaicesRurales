import logo from './logo.svg';
import './App.css';
import NavBar from './components/Inicio/navBar';
import Promo from './components/Inicio/promo';
import Encabezado from './components/Inicio/encabezado';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Encabezado/>
    </div>
  );
}

export default App;
