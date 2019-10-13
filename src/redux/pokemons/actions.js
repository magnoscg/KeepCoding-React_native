import * as types from './types'
import _ from 'lodash'
import * as api from '../../api'

const LIMIT = 20
export const setFetching = value => {
    const action = {
        type: types.POKEMONS_SET_FETCHING,
        value: value
    }
    return action
}

export const updateList = (list, total) => {
    return {
        type: types.POKEMONS_UPDATE_LIST,
        list: list,
        total:total
    }
}

export const updateItem = value => {
    return {
        type: types.POKEMONS_UPDATE_ITEM,
        value,
    }
}

export const updateOffset = value => {
    return {
        type: types.POKEMONS_UPDATE_OFFSET,
        value,
    }
}
export const initPokemonList = () => {
    return async (dispatch) => {
       dispatch(updateList([], 0))
       dispatch(updateOffset(0))
       dispatch(fetchPokemonsList())
    }
}
export const updatePokemonListOffset = () => {
    return async (dispatch,getState) => {
       const {offset} = getState().pokemons
       const newOffset = offset + LIMIT
       dispatch(updateOffset(newOffset))
       dispatch(fetchPokemonsList())
    }
}

export const fetchPokemonsList = () => {
    return async (dispatch,getState) => {
        try{
            dispatch(setFetching(true))
            const {offset, list} = getState().pokemons
            const params = {offset}
            const getPokemonsRes = await api.getPokemons(params);

            const newList = [...list,..._.get(getPokemonsRes,'data.results',[])]    
            const total = parseInt(_.get(getPokemonsRes, 'data.count', 0));    
            dispatch(updateList(newList,total))
        } catch(e) {
            console.log('getPokemonsErr: ', e.message);
        } finally {
            dispatch(setFetching(false))
        }
    }
}

export const postPokemon = data => {
    return (dispatch, getState) => {
      try {

        dispatch(setFetching(true));
        const pokemonData = data;
  
        const {list, total} = getState().pokemons;
  
        const newList = [...list, pokemonData];
        const newTotal = total + 1;
        dispatch(updateList(newList, newTotal));
        if (pokemonData) {
          Actions.pop();
        }
      } catch (err) {
        console.log('postPokemon err: ', err.message);
      } finally {
        dispatch(setFetching(false));
      }
    };
  };
