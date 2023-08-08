function AnimalCard({ animal }) {


    // EVENTS //

    function handleChangeEndangered(event) {
      console.log("Attempting to change endangered")
    }


    // RENDER //

    return (
        <div className="animal-card">

            <p>Name: { animal.name }</p>

            <p>Species: { animal.species }</p>

            <p>Endangered:
                <input type="checkbox"
                checked={animal.endangered}
                onChange={ handleChangeEndangered } />
            </p>

            <button>Release to the Wild</button>

        </div>
    )

}

export default AnimalCard
