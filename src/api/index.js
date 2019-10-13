import axios from 'axios'
import {BASE_URL} from '../config/api'

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-type': 'application/json'}
})

export const getPokemons = () => {
    const url = '/pokemon'
    return instance.get(url)
}

export const getPokemonData = pokemonName => {
    const url = `/pokemon/`+ pokemonName
    return instance.get(url)
}
