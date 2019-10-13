import React, {Component} from 'react';
import styles from './styles'
import {SafeAreaView, FlatList, RefreshControl} from 'react-native'
import _ from 'lodash'
import {PokemonCard} from '../../molecules'
import { Actions } from 'react-native-router-flux';


class Home extends Component {

  constructor(props) {
    super(props)
    this.props.initPokemonList()
  }
    
    _onPokemonTapped = pokemon => {
        this.props.updateItem(pokemon)
        var name = _.get(pokemon,'name')
        name = name.toUpperCase()
        Actions.Pokemon({title: name})
    }

    _renderItem = ({item,index,name}) => <PokemonCard pokemon={item} index={index} name={name} onPress={pokemon => this._onPokemonTapped(pokemon)}/>

    _onEndReached = ({distanceFromEnd}) => {
      const {isFetching, pokemonList, total} = this.props
      const onEndReached = distanceFromEnd > 100 && !isFetching && pokemonList.length < total
      if (onEndReached) {
        this.props.updatePokemonListOffset();
      }
    }

    render() {
        const {pokemonList, isFetching} = this.props
        const name = _.get(pokemonList,'name')
        return (
          <SafeAreaView style={styles.container}>
            <FlatList
            style= {styles.list}
            data={pokemonList}
            renderItem={this._renderItem}
            keyExtractor={(item,index)=> `pokemon-${index}`}
            numColumns={2}
            onEndReached= {this._onEndReached}
            onEndReachedThreshold={0.8}
            refreshControl={
            <RefreshControl 
            refreshing={isFetching} 
            onRefresh={this.props.initPokemonList}
            tintColor={'white'}
            colors={['white']}
            />}
            >
            </FlatList>
          </SafeAreaView>
        );
    }
}
export default Home;

