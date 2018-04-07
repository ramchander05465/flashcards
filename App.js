import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducers from './reducers'
import DeckList from './containers/DeckList'
import AddDeck from './containers/AddDeck'
import AddCard from './containers/AddCard'
import Quiz from './containers/Quiz'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Quiz />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:40
  },
});
