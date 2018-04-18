import React from 'react'
import {TabNavigator, StackNavigator} from 'react-navigation'

import DeckList from './containers/DeckList'
import Card from './containers/Card'
import AddDeck from './containers/AddDeck'
import AddCard from './containers/AddCard'
import Quiz from './containers/Quiz'

  const Tabs = TabNavigator({
    DeckList:{
      screen:DeckList,
      navigationOptions:{
        title:'Decks'
      }
    },
    AddDeck:{
      screen:AddDeck,
      navigationOptions:{
        title:'Add Deck'
      }
    }
  })
  
  const AppNavigation = StackNavigator({
    DeckList:{
      screen:Tabs,
      navigationOptions:{
        title:'Decks',
        headerLeft: null
      }
    },
    AddCard:{
      screen:AddCard,
      navigationOptions:{
        title:'Add Card'
      }
    },
    Card:{
      screen:Card,
      navigationOptions:{
        title:'Card'
      }
    },
    Quiz:{
      screen:Quiz,
      navigationOptions:{
        title:'Quiz'
      }
    }
  })

  export default AppNavigation