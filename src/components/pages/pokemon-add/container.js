import {connect} from 'react-redux';
import {pokemonsActions} from '../../../redux/pokemons';
import View from './view';

const mapStateToProps = state => {
  return {
     pokemon: state.pokemons.item,
     isFetching: state.pokemon.isFetching
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
        postPokemon: data => dispatch(pokemonsActions.postPokemon(data)),
  };
};

export default connect(
  mapStateToProps,mapDispatchToProps,)(View);