import React from 'react';
import {YellowBox} from 'react-native'
import Routes from '../routes'

class App extends React.Component {

    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps'])
        
    }

    render() {
        return (
            <Routes/>
        )
    }
}

export default App;
