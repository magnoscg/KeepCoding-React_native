import React from 'react'
import {TouchableOpacity,Image, Text, Dimensions} from 'react-native'
import _ from 'lodash'
import Proptypes  from 'prop-types'

const images = {}
const {width,height} = Dimensions.get('window')

class PokemonCard extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            imageWidth: 0, imageHeight: 0,
        }
    }
    componentDidMount() {
        const {pokemon, index} = this.props
        const imageDir = _.get(images[index],'imageDir')
        const name = _.get(pokemon, 'name')
        Image.getSize(
            imageDir,
            (realImageWidth,realImageHeight) => {
                const imageWidth = width / 2
                const imageHeight = (realImageWidth * imageWidth) / realImageHeight
                this.setState({imageWidth: imageWidth, imageHeight: imageHeight})
            }
            
        ),
        err => {
            console.log('getSizee err:',err)
        }
        
    }
    render() {
        const {pokemon,index, onPress} = this.props
        const {imageWidth, imageHeight} = this.state
        const name = _.get(pokemon,'name')
        const upperCaseName = name.toUpperCase()
        const imageDir = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
        images[index]={imageDir: imageDir}
        return (
            <TouchableOpacity onPress={() => onPress(pokemon)}>
                <Image 
                source={{uri:imageDir}} 
                style={{
                    width:imageWidth,
                    height: imageHeight,
                    resizeMode: "contain",
                    }}/>
                <Text style={{textAlign: "center",  }}>{upperCaseName}</Text>
            </TouchableOpacity>
        )
    }
}

PokemonCard.defaultProps = {
    onPress: () => {}
}

PokemonCard.propTypes = {
    pokemon: Proptypes.object.isRequired,
    onPress: Proptypes.func,
}
export default PokemonCard;