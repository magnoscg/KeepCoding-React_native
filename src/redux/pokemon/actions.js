import * as types from './types'
import * as api from '../../api'
import _ from 'lodash'

export const setFetching = value => {
    return {
        type: types.POKEMON_SET_FETCHING,
        value
    }
}

export const updateItem = (name,weight, height, image) => {
    return {
        type: types.POKEMON_UPDATE_ITEM,
        name,
        weight,
        height,
        image
    }
}

export const fetchPokemon = () => {
    return async (dispatch, getState) => {
        const pokemon = getState().pokemons.item
        try{
            dispatch(setFetching(true))
            const name = _.get(pokemon,'name')

            const getPokemonData = await api.getPokemonData(name)

            const weight = (_.get(getPokemonData,'data.weight')).toString()
            const height = (_.get(getPokemonData,'data.height')).toString()
            const image = _.get(getPokemonData,'data.sprites.front_default')
            dispatch(updateItem(name,weight,height,image))
        } catch (e) {
           console.log('fetchpokemon e:', e.message)
        }  finally {
            dispatch(setFetching(false))
        }
    }
}
