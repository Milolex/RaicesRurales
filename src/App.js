import React, { useState } from 'react';
import './App.css';
import NavBar from './components/Inicio/navBar';
import Encabezado from './components/Inicio/encabezado';
import Promo from './components/Inicio/promo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="App">
      <NavBar isMenuOpen={isMenuOpen} onCheckboxChange={handleCheckboxChange} />
      <Encabezado />
      <Promo />
    </div>
  );
}

export default App;
