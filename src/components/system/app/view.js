import React from 'react';
import {YellowBox, StatusBar} from 'react-native'
import Routes from '../routes'

class App extends React.Component {

    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps'])
        StatusBar.setBarStyle('light-content',false)
        
    }

    render() {
        return (
            <Routes/>
        )
    }
}

export default App;
