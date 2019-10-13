import {connect} from 'react-redux'
import View from './view'
import {PokemonActions} from '../../../redux/pokemon'

const mapStateToProps = state => {
    console.log('state',state)
    return {
        name: state.pokemon.name,
        weight: state.pokemon.weight,
        height: state.pokemon.height,
        image: state.pokemon.image,
        isFetching: state.pokemon.isFetching,
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchPokemon: () => dispatch(PokemonActions.fetchPokemon())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(View);