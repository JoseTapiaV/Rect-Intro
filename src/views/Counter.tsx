// Views es donde van las paginas
import { useState } from "react"
import { Link } from "react-router-dom";

// Creación de la función de flecha con el nombre Counter
export const Counter = () => {

    // Funcion para manejar el estado
    // Los "use" son los hooks
    const [counterValue, setCounterValue] = useState(0);

    // Suma validada hasta 10
    const handleAdd = () => {
        setCounterValue(counterValue + 1)
        if(counterValue == 10){
            setCounterValue(10);
        }
    }

    // Resta validada hasta 0
    const handleRestar = () => {
        setCounterValue(counterValue - 1)
        if(counterValue == 0){
            setCounterValue(0);
        }
    }

    // Devuelve un HTML
    return (
        <div>
            <h1>
                Contador: {counterValue}
            </h1>
            <button onClick={handleAdd}>
                Sumar
            </button>

            <button onClick={handleRestar}>
                Restar
            </button>

            {/* Boton para regresar a la pagina principal */}
            <button>
                <button><Link to="/">Home</Link></button>
            </button>
        </div>

    )
}