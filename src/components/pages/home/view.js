import React, {Component} from 'react';
import styles from './styles'
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native'


class Home extends Component {

    render() {
        return (
          <SafeAreaView style={styles.container}>
            <View>
              <Text>Home</Text>
            </View>
          </SafeAreaView>
        );
    }
}

export default Home
