import React from 'react'
import {Router, Stack,Scene, Actions} from 'react-native-router-flux'
import {Home, Pokemon, PokemonsAdd} from '../../pages'
import styles, {navBarStyles} from './styles'

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="Home" component={Home}
      title={'Pokedex'}
      rightTitle={'Crear'}
        onRight={() => Actions.PokemonsAdd()} 

        {...navBarStyles}
        ></Scene>
      <Scene
        key="Pokemon"
        component={Pokemon}
        
        {...navBarStyles}
      />
      <Scene
        key="PokemonsAdd"
        component={PokemonsAdd}
        title={'Crear Pokemon'}
        {...navBarStyles}
      />
    </Stack>
  </Router>
);

export default Routes;
