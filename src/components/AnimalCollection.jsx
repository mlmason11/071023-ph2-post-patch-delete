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
        .then( fetchedAnimals => setAnimals(fetchedAnimals) )
    }, [])


    // CALLBACK FUNCTIONS //

    function addAnimal( newAnimal ) {
        setAnimals([...animals, newAnimal])
    }

    function editAnimal( editedAnimal ) {
        const newAnimals = animals.map( animal => animal.id === editedAnimal.id ? editedAnimal : animal )
        setAnimals( newAnimals )
    }

    function releaseAnimal( deletedAnimal ) {
        const filteredAnimals = animals.filter( animal => animal.id !== deletedAnimal.id )
        setAnimals( filteredAnimals )
    }

    // RENDER //

    return (
        <>
            <AnimalForm addAnimal={addAnimal} />

            <h2>Our Zoo Animals</h2>

            <div className="animal-container">

                { animals.map(animal => <AnimalCard key={animal.id} animal={animal} editAnimal={editAnimal} releaseAnimal={releaseAnimal} />) }

            </div>
        </>
    )
}

export default AnimalCollection
