import React from 'react';
import {YellowBox, StatusBar} from 'react-native'
import Routes from '../routes'
import {Provider} from 'react-redux'
import store from '../../../config/redux'

class App extends React.Component {

    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps'])
        StatusBar.setBarStyle('light-content',false)    
    }

    render() {
        return (
            
            <Provider store={store}>
                <Routes/>
            </Provider>
        )
    }
}

export default App;
