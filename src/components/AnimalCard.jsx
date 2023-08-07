function AnimalCard({ animal }) {

    return (
        <div>

            <p>Name: { animal.name }</p>
            <p>Species: { animal.species }</p>
            <p>Endangered: {animal.endangered ? "Endangered" : "Not Endangered"}</p>

        </div>
    )

}

export default AnimalCard