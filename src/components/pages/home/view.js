import React, {Component} from 'react';
import styles from './styles'
import {SafeAreaView, View, Text, TouchableOpacity,Image, FlatList} from 'react-native'
import * as api from '../../../api'
import _ from 'lodash'
import {PokemonCard} from '../../molecules'


class Home extends Component {

    state = {
        pokemonList: [],
    }

    componentDidMount() {
        this._loadPokemonList()
    }

    _loadPokemonList = async () => {
        try{
            const getPokemonsRes = await api.getPokemons();
            const pokemonList = _.get(getPokemonsRes,'data.results')
            this.setState({pokemonList})
            
            
            
        } catch(e) {
            console.log('getPokemonsErr: ', e);
        } finally {
            
        }
    }


    _renderItem = ({item,index}) => <PokemonCard pokemon={item} index={index} onPress={pokemon => console.log('pokemon', pokemon)}/>

    render() {
        const {pokemonList} = this.state
        return (
          <SafeAreaView style={styles.container}>
           <FlatList
           style= {styles.list}
           data={pokemonList}
           renderItem={this._renderItem}
           keyExtractor={(item,index)=> `pokemon-${index}`}
           numColumns={2}
           >
           </FlatList>
          </SafeAreaView>
        );
    }
}

export default Home
