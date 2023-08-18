import React from 'react';
import './App.css';
import NavBar from './components/Inicio/navBar';
import Encabezado from './components/Inicio/encabezado';
import Promo from './components/Inicio/promo';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Encabezado />
      <Promo />
    </div>
  );
}

export default App;
