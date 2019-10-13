import {connect} from 'react-redux'
import {pokemonsActions} from '../../../redux/pokemons'
import View from './view'

const mapStateToProps = state => {
    return {
        pokemonList: state.pokemons.list,
        isFetching: state.pokemons.isFetching,
        total: state.pokemons.total,
        offset: state.pokemons.offset
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        initPokemonList: () => dispatch(pokemonsActions.initPokemonList()) ,
        updatePokemonListOffset: () => dispatch(pokemonsActions.updatePokemonListOffset()),
        // fetchPokemonsList: (list) => {
        //     dispatch(pokemonsActions.fetchPokemonsList(list))
        // },
        updateItem: (pokemon) => {
           dispatch(pokemonsActions.updateItem(pokemon))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);