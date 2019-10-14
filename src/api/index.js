import axios from 'axios'
import {BASE_URL} from '../config/api'
import qs from 'qs'

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-type': 'application/json'}
})

export const getPokemons = params => {
    const paramStringify = qs.stringify(params, {skipNulls: true});
    const url = `/pokemon?${paramStringify}`;
    return instance.get(url);

}

export const getPokemonData = pokemonName => {
    const url = `/pokemon/`+ pokemonName
    return instance.get(url)
}

//FAKE POSTPOKEMON
