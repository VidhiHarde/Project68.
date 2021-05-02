import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Fb from './screens/fb';
import Insta from './screens/insta' ;

export default class App extends Component() {
  render(){
    return (
      <View style={styles.container}>
        <Text> Hi This Is 2 in 1 app !</Text>
        <AppContainer></AppContainer>
      </View>
    );
  }

}
const TabNavigator = createBottomTabNavigator({
  Fb :{
    screen:FbScreen
  },
  Insta :{
    screen:InstaScreen
  },
})

const AppContainer =createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
