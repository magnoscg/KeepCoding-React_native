import React from 'react';
import {SafeAreaView,Text,TextInput, View, TouchableOpacity, ActivityIndicator, Alert, Image} from 'react-native';
import styles from './styles'
import ImagePicker from 'react-native-image-picker'
import {IMAGES_OPTIONS} from '../../../config/images'
import _ from 'lodash'

class PokemonsAdd extends React.Component {
  state = {
    name: '',
    weight: '',
    height: '',
    image: '',
  }

  _onSubmit = () => {
    const {isFetching, pokemon} = this.props
    const {name, weight, height, image} = this.state
    console.log('image:', image)
    if(isFetching) {
      return
    }
    if(!name || !weight || !height) {
      Alert.alert('Faltan los datos del pokemon')
      return;
    }
    const data = {
      name,
      url: {
        name,
        weight,
        height,
        image: _.has(this.state, 'image.data')
        ? 'data:image/jpeg:base64' + image.data
        : null,
      },
      
    }
    this.props.postPokemon(data);
  }

  _onImageTapped = () => {
    ImagePicker.showImagePicker(IMAGES_OPTIONS, response => {
      if (response.uri) {
        this.setState({image: response});
      }
    });
  };

  render() {
    const {isFetching} = this.props
    const {name, weight, height, image} = this.state
    console.log(image)
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.imageInputContainer} onPress={this._onImageTapped}>

        <Image source={{uri: _.get(image,'uri','')}} style= { styles.imageInputPreview} />
          <View style={styles.imageInputButton}>
            <Text style={styles.imageInputLabel}>{'Elegir foto'}</Text>
          </View>
          

        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{'Nombre: '}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={name => this.setState({name})}
              placeholder={'Nombre'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{'Peso: '}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={weight => this.setState({weight})}
              placeholder={'Peso'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{'Altura: '}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={height}
              onChangeText={height => this.setState({height})}
              placeholder={'Altura'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this._onSubmit}>
          <Text style={styles.buttonLabel}>{'CREAR POKEMON'}</Text>
          {isFetching ? (
            <ActivityIndicator
              color={'black'}
              style={styles.activityIndicator}
            />
          ) : null}
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default PokemonsAdd;