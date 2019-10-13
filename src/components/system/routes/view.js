import React from 'react'
import {Router, Stack,Scene} from 'react-native-router-flux'
import {Home, Pokemon} from '../../pages'

const Routes = () => (

       <Router>
           <Stack key="root">
            <Scene key="Home" component={Home} hideNavBar></Scene>
            <Scene key="Pokemon" component={Pokemon}></Scene>
           </Stack>
       </Router>

)

export default Routes;
