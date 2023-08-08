function AnimalCard({ animal }) {

    function handleChangeEndangered(event) {
      console.log("Attempting to change endangered")
    }

    return (
        <div>

            <p>Name: { animal.name }</p>

            <p>Species: { animal.species }</p>

            <p>Endangered:
                <input type="checkbox"
                checked={animal.endangered}
                onChange={ handleChangeEndangered } />
            </p>

        </div>
    )

}

export default AnimalCard
