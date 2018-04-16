import React from 'react'
import {TabNavigator, StackNavigator} from 'react-navigation'

import DeckList from './containers/DeckList'
import Card from './containers/Card'
import AddDeck from './containers/AddDeck'
import AddCard from './containers/AddCard'
import Quiz from './containers/Quiz'

  
  const AppNavigation = StackNavigator({
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