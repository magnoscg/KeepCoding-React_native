import * as types from './types'


export const setFetching = () => {
    const action = {
        type: types.POKEMONS_SET_FETCHING,
        value: value
    }
    return action
}
