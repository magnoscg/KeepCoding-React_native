import React, {Component} from 'react';
import styles from './styles'
import {SafeAreaView, View, Text, TouchableOpacity,Image, FlatList} from 'react-native'
import * as api from '../../../api'
import _ from 'lodash'


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

    _renderItem = ({item,index}) => {

        const name = _.get(item, 'name')
        const url = _.get(item,'url')
        const imageDir = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
        return (
            <TouchableOpacity style={{flex: 1}}>
                <Image source={{uri:imageDir}} style={{width:'100%', height: 200}}/>
                <Text style={{alignItems: 'center'}}>{name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const {pokemonList} = this.state
        return (
          <SafeAreaView style={styles.container}>
           <FlatList
           data={pokemonList}
           renderItem={this._renderItem}
           keyExtractor={(item,index)=> `pokemon-${index}`}
           numColumns={2}>
           </FlatList>
          </SafeAreaView>
        );
    }
}

export default Home
