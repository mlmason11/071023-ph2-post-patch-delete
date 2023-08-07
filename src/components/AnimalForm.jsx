import { useState } from 'react'

function AnimalForm({ addAnimal }) {

    // --- STATE --- //

    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [endangered, setEndangered] = useState(false)

    // --- CALLBACK FUNCTIONS --- //

    const handleChangeName = (event) => setName(event.target.value)

    function handleChangeSpecies(event) {
        setSpecies(event.target.value)
    }

    const handleChangeDropdown = (event) => setEndangered(event.target.value === "true" ? true : false)


    function handleSubmitAnimal(e) {
        e.preventDefault()

        const OPTIONS = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, species, endangered
            })
        }

        fetch('http://localhost:3000/animals', OPTIONS)
        .then( res => res.json() )
        .then( newAnimalData => {
            addAnimal(newAnimalData)
        } )

        setName('')
        setSpecies('')
        setEndangered(false)
    }


    // --- RENDER --- //

    return (
        <form onSubmit={ handleSubmitAnimal }>

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={ handleChangeName } value={name} />

            <label htmlFor="species">Species:</label>
            <input type="text" name="species" onChange={ handleChangeSpecies } value={species} />

            <label htmlFor="endangered">Endangered?</label>
            <input type="checkbox" onChange={ () => setEndangered(!endangered) } checked={endangered} />

            <select onChange={ handleChangeDropdown } value={endangered} >
                <option value={true}>Endangered</option>
                <option value={false}>Not Endangered</option>
            </select>

            <input type="submit" value="Register New Animal" />

        </form>
    )

}

export default AnimalForm