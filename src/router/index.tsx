// Ejemplo de routing 
// reactrouter.com
import React from 'react';
import { createBrowserRouter, Link } from "react-router-dom";
import { Counter } from "../views/Counter";
import { Pets } from '../views/Pets/Pets';

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
            <button><Link to="counter">Ejemplo de contador</Link></button>
            <button><Link to="pet">Ejemplo de mascotas</Link></button>
        </div>
      ),
    },
    {
      path: "counter",
      element: <Counter/>,
    },
    {
        path: "pet",
        element: <Pets/>,
    },
  ]);