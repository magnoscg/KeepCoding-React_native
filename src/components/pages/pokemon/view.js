import React, {Component} from 'react'
import {SafeAreaView,Text, Image,View,TouchableOpacity} from 'react-native'
import styles from './styles'

class Pokemon extends Component {

    constructor(props) {
        super(props)
        this.props.fetchPokemon()
    }
   

    render() {
        const imageDir = this.props.image
        const name = this.props.name
        const height = this.props.height;
        const weight = this.props.weight;

        return (
          <SafeAreaView style={styles.container}>
          <TouchableOpacity>
            <Image
              source={{uri: imageDir}}
              style={{
                width: 288,
                height: 288,
                resizeMode: 'cover',
              }}
            />
            <View style={styles.text}>
              <Text style={styles.text}>
                Nombre:
                <Text style={styles.text}>  {name}</Text>
              </Text>
              <Text style={styles.text}>
                Peso:
                <Text style={styles.text}>  {weight}</Text>
              </Text>
              <Text style={styles.text}>
                Altura:
                <Text style={styles.text}>  {height}</Text>
              </Text>
            </View>
            </TouchableOpacity>
            
          </SafeAreaView>
        );
    }
}

export default Pokemon;
