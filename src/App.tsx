// Donde se llama al router para la navegacion
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './views/Counter';
import { Pets } from './views/Pets';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

// Funcion llamada para crear el HTML
function App() {
  return (
    <div className="App">
      <h1>Aplicación por PepeHumo</h1>
      {/* Se llama a la función de flecha creada */}
      {/* <Counter/> */}
      {/* <Pets/> */}
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
