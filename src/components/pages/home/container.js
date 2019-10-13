import {connect} from 'react-redux'
import {pokemonsActions} from '../../../redux/pokemons'
import View from './view'

const mapStateToProps = state => {
    return {
        pokemonList: state.pokemons.list,
        isFetching: state.pokemons.isFetching
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchPokemonsList: (list) => {
            dispatch(pokemonsActions.fetchPokemonsList(list))
        },
        updateItem: (pokemon) => {
           dispatch(pokemonsActions.updateItem(pokemon))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);