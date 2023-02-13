// Donde va el codigo a reutilizar 
import React, { FC } from 'react'
import { Pet } from '../interfaces/Pet'

interface Props{
    data: Pet
}

export const PetCard: FC<Props> = (props) => {

    const {name, age, bornDate, country }= props.data

    return (
        <div className="card">
            <div className="card-body">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Born Date: {bornDate.toDateString()}</div>
                <div>Country: {country}</div>
            </div>
        </div>
    )
}
