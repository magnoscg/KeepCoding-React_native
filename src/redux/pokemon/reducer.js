import * as types from './types.js'

const initialState = {

    item: "",
    isFetching: false,
    name: "",
    weight: "",
    height: "",
    image: "",

    
}

const reducer = (state= initialState, action = {}) => {
    switch(action.type){

        case types.POKEMON_UPDATE_ITEM:
        return {
            ...state,
            item: action.value,
            name: action.name,
            weight: action.weight,
            height:action.height,
            image: action.image,
        }
        case types.POKEMON_SET_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }

        default:
            return state
    }
}

export default reducer;