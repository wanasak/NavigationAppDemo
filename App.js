import React, { Component } from 'react';

// Stack Navigator
// import RootNavigator from './app/navigation/StackNavigator';

// Tab Navigator
// import RootNavigator from './app/navigation/TabNavigator';

// Drawer Navigator
import RootNavigator from './app/navigation/DrawerNavigator';

export default class App extends Component {
  render() {
    return (
      <RootNavigator />
    )
  }
}