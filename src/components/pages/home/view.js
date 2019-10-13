import React, {Component} from 'react';
import styles from './styles'
import {SafeAreaView, FlatList, RefreshControl} from 'react-native'
import _ from 'lodash'
import {PokemonCard} from '../../molecules'
import { Actions } from 'react-native-router-flux';


class Home extends Component {

    componentDidMount() {
        this.props.fetchPokemonsList()
    }
    _onPokemonTapped = pokemon => {
        this.props.updateItem(pokemon)
        var name = _.get(pokemon,'name')
        name = name.toUpperCase()
        Actions.Pokemon({title: name})
    }

    _renderItem = ({item,index}) => <PokemonCard pokemon={item} index={index} onPress={pokemon => this._onPokemonTapped(pokemon)}/>

    _onEndReached = ({distanceFromEnd}) => {

    }

    render() {
        const {pokemonList, isFetching} = this.props
        console.log(this.props)
        return (
          <SafeAreaView style={styles.container}>
            <FlatList
            style= {styles.list}
            data={pokemonList}
            renderItem={this._renderItem}
            keyExtractor={(item,index)=> `pokemon-${index}`}
            numColumns={2}
            onEndReached= {this._onEndReached}
            refreshControl={
            <RefreshControl 
            refreshing={isFetching} 
            onRefresh={this.props.fetchPokemonsList}
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

