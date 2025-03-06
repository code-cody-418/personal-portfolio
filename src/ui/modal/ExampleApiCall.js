import { useEffect, useRef, useState } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Pokedex = ({ pokemon }) => {
    return (
        <>
            <div className="pokedex">
                <Row>
                    <Col md={12} className="text-center mb-0">
                        <h5 >
                            <span className="text-capitalize">{pokemon.name} </span>
                            <span className="text-white-50">#{pokemon.order}</span>
                        </h5>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={8}>
                        <p className="font-weight-bold mb-0">Weight: <span className="font-weight-normal font-italic">{pokemon.weight}</span></p>
                        <p className="font-weight-bold mb-0">Height: <span className="font-weight-normal font-italic"  >{pokemon.height}</span></p>
                    </Col>

                    <Col md={4}>
                        <img src={pokemon.sprites.front_default} className="img-fluid" alt="Pokemon Sprite" />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="font-weight-bold mb-0">Abilities: <span className="font-weight-normal font-italic text-capitalize">{pokemon.abilities[0].ability.name}</span></p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="font-weight-bold mb-0">Type: <span className="font-weight-normal font-italic text-capitalize">{pokemon.types[0].type.name}</span></p>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export const ExampleApiCall = () => {
    const pokeSearch = useRef(null)

    //make an api call to the pokemon api for an example
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState(null)

    const callPokeApi = () => {
        let lowerCasePokemon
        if(pokeSearch?.current.value){
            lowerCasePokemon = pokeSearch?.current.value.toLowerCase()
        } else {
            lowerCasePokemon = "pikachu"
        }

        fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCasePokemon}`)
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                setError(false)
                setPokemon(json)
            })
            .catch((error) => {
                setPokemon(false)
                setError(true)
            })
    }

    useEffect( () => {
        callPokeApi()
    }, [])

    return (
        <>
            <Row>
                <Col className="p-0">
                    <label className="form-label mb-0"> Search Pokemon</label>
                </Col>
            </Row>
            <Row>
                <Col md={8} className="p-0 pr-1">
                    <input ref={pokeSearch} className="form-control" type="text" name="pokemon" placeholder="Pikachu" />
                </Col>

                <Col md={4} className="p-0">
                    <button className="btn btn-secondary mb-4" type="button" onClick={() => callPokeApi()}>Search</button>
                </Col>
            </Row>

            {error ? <p>No Pokemon found. Try again.</p> : null}

            {pokemon ? <Pokedex pokemon={pokemon} /> : null}
        </>
    )
}