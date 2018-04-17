import React from 'react'
import {View} from 'react-native'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducers from './reducers'
import {setLocalNotification} from './utils/helpers'
import AppNavigation from './Navigations'

export default class App extends React.Component {  
  componentDidMount(){
    setLocalNotification()
  }
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