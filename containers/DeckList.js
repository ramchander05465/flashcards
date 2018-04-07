import React, { Component } from 'react'
import {View, ScrollView, Text } from 'react-native'
import {connect} from 'react-redux'

import Deck from '../components/Deck'

class DeckList extends Component{    
  render(){
    return(
      <ScrollView>
        {Object.keys(this.props.deckListInfo).map((item, i) => <Deck key={item + i} deckInfo= {this.props.deckListInfo[item]} /> )}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    deckListInfo:state.demoDeck
  }
}
export default connect(mapStateToProps)(DeckList)