import * as types from './types'
import _ from 'lodash'
import * as api from '../../api'

export const setFetching = () => {
    const action = {
        type: types.POKEMONS_SET_FETCHING,
        value: value
    }
    return action
}

export const updateList = value => {
    return {
        type: types.POKEMONS_UPDATE_LIST,
        value: value,
    }
}

export const fetchPokemonsList = () => {
    return async (dispatch,getState) => {
        try{
            const getPokemonsRes = await api.getPokemons();
            const pokemonList = _.get(getPokemonsRes,'data.results')        
            dispatch(updateList(pokemonList))
        } catch(e) {
            console.log('getPokemonsErr: ', e);
        } finally {
            
        }
    }
}
