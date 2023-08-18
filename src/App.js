import React from 'react';

import logo from './logo.svg';
import './App.css';
import NavBar from './components/Inicio/navBar';
import Promo from './components/Inicio/promo';
import Encabezado from './components/Inicio/encabezado';


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
