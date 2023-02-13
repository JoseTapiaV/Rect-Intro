// Views es donde van las paginas
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { PetCard } from '../../components/PetCard';
import { Pet } from '../../interfaces/Pet';
// Importar el CSS
import './Pets.css';

function timeout(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Revisar Promise
const fetchData = async (): Promise<Pet[]> => {

    // Retarda 2 segundo para mostrar los datos
    const res = await timeout(2000);
    return [
        {
            id: '1',
            name: 'Pepito',
            age: 3,
            bornDate: new Date()
        },
        {
            id: '2',
            name: 'Chiquita',
            age: 4,
            bornDate: new Date()
        },
        {
            id: '3',
            name: 'Blue',
            age: 5,
            bornDate: new Date(),
            country: 'Mexico'
        }
    ]
}

export const Pets = () => {

    const dataInit: Pet[] = [];

    // Estado
    const [data, setData] = useState(dataInit);
    const [loading, setLoading] = useState(true);

    //Hacer un Cargando y después mostrar la tabla
    useEffect(() => {
        fetchData().then(data => {
            setLoading(false); setData(data);
        });
    }, [])

    // Tabla de mascotas en HTML JSX
    return (
        <div>
            {
                loading ? (
                    <div>
                        Cargando...
                    </div>
                ) : (
                    <table className='petsContainer'>
                        <thead className='thead-dark'>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    Age
                                </td>
                                <td>
                                    BornDate
                                </td>
                                <td>
                                    Country
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((pet) => (
                                    <tr key={pet.id}>
                                        <td>
                                            {pet.name}
                                        </td>
                                        <td>
                                            {pet.age}
                                        </td>
                                        <td>
                                            {pet.bornDate.toDateString()}
                                        </td>
                                        <td>
                                            {pet.country}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }

            <h2>Listado de las mascotas</h2>
            {
                data.map((pet) => (
                    <PetCard data={pet} />
                ))
            }

            {/* Boton para regresar a la pagina principal */}
            <button>
                <button><Link to="/">Home</Link></button>
            </button>
        </div>
    )
}