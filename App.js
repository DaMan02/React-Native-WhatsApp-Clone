import React  from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainActivity from './src/screens/MainActivity';
import Colors from './src/assets/colors';

const rootStack = createStackNavigator({
  MainActivity : {
      screen: MainActivity,
        },
  },
  {
    initialRouteName: 'MainActivity',
  })


  const AppContainer = createAppContainer(rootStack);

  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }