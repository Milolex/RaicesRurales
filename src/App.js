import React from 'react';
import './App.css';
import NavBar from './components/Inicio/navBar';
import Encabezado from './components/Inicio/encabezado';
import Promo from './components/Inicio/promo';
import Target from './components/Inicio/target';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Encabezado />
      <Promo />
      <Target/>
    </div>
  );
}

export default App;
