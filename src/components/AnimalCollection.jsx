import { useState, useEffect } from 'react'
import AnimalCard from './AnimalCard'
import AnimalForm from './AnimalForm'

function AnimalCollection() {

    // --- STATE --- //

    const [animals, setAnimals] = useState([])
    const [filterEndangered, setFilterEndangered] = useState(false)

    // --- FETCH / USEEFFECT --- //

    useEffect(() => {
        fetch('http://localhost:3000/animals')
        .then( response => response.json() )
        .then( fetchedData => setAnimals(fetchedData) )
    }, [])

    // --- CALLBACK FUNCTIONS --- //

    function addAnimal( newAnimal ) {
        setAnimals( [ ...animals, newAnimal ] )
    }

    function toggleFilterEndangered() {
        setFilterEndangered( !filterEndangered )
    }

    // --- RENDER --- //

    const filteredAnimals = filterEndangered ? animals.filter(animal => animal.endangered) : animals

    return (
        <div>

            <button onClick={ toggleFilterEndangered }>Show { filterEndangered ? "All" : "Endangered" }</button>

            <AnimalForm addAnimal={addAnimal} />

            { filteredAnimals.map(animal => <AnimalCard key={animal.id} animal={animal} />) }

        </div>
    )
}

export default AnimalCollection