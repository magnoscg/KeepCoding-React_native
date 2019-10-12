import React, {Component} from 'react'
import {SafeAreaView,View,Text} from 'react-native'
import styles from './styles'


class Pokemon extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Pokemon</Text>
            </SafeAreaView>
        )
    }
}


export default Pokemon;