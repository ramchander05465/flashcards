import React from 'react'
import {View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback} from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducers from './reducers'
import {purple, white} from './utils/colors'
import {setLocalNotification} from './utils/helpers'

import UdaciStatusbar from './components/UdaciStatusbar'
import AppNavigation from './Navigations'

export default class App extends React.Component {  
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{'flex':1}}>
          <AppNavigation />
        </View>
      </Provider>
    );
  }
}