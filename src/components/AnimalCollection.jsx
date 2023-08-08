import { useState, useEffect } from 'react'
import AnimalCard from './AnimalCard'
import AnimalForm from './AnimalForm'

function AnimalCollection() {


    // STATE //

    const [animals, setAnimals] = useState([])


    // EFFECTS //

    useEffect(() => {
        fetch('http://localhost:3000/animals')
        .then( response => response.json() )
        .then( fetchedData => setAnimals(fetchedData) )
    }, [])


    // CALLBACK FUNCTIONS //

    /* We'll add some callback functions here */


    // RENDER //

    return (
        <div>

            <AnimalForm />

            { animals.map(animal => <AnimalCard key={animal.id} animal={animal} />) }

        </div>
    )
}

export default AnimalCollection
