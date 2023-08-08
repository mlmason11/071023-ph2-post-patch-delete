import { useState } from 'react'

function AnimalForm() {


    // STATE //

    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [endangered, setEndangered] = useState(false)


    // EVENTS //

    const handleChangeName = (event) => setName(event.target.value)

    const handleChangeSpecies = (event) => setSpecies(event.target.value)

    const toggleEndangered = () => setEndangered(!endangered)

    function handleSubmitAnimal(e) {
        e.preventDefault()

        resetForm()
    }


    // HELPER FUNCTIONS //

    function resetForm() {
        setName('')
        setSpecies('')
        setEndangered(false)
    }


    // RENDER //

    return (
        <form onSubmit={ handleSubmitAnimal }>

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={ handleChangeName } value={name} />

            <label htmlFor="species">Species:</label>
            <input type="text" name="species" onChange={ handleChangeSpecies } value={species} />

            <label htmlFor="endangered">Endangered?</label>
            <input type="checkbox" onChange={ toggleEndangered } checked={endangered} />

            <input type="submit" value="Register New Animal" />

        </form>
    )

}

export default AnimalForm
