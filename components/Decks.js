import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ScrollView, TouchableOpacity, Text} from 'react-native'

import Deck from './Deck'
import {addDeck, getDeck} from '../actions'
import {get_Deck} from '../utils/api'

class Decks extends Component {
  componentDidMount(){
    alert('ddd')
    const {dispatch} = this.props
    get_Deck()
      .then((result) => dispatch(getDeck(result)))
  }
  renderDeck(){
    return Object.keys(this.props.deckListInfo).map((item, i) => (
        <TouchableOpacity
          key={i+'ss'} 
          onPress={() => this.props.navigation.navigate('Card', {cardName:item})}>
          <Deck key={item + i} deckInfo= {this.props.deckListInfo[item]} />
        </TouchableOpacity>
      )
    )
  }

  render(){
    if(this.props.deckListInfo === null || this.props.deckListInfo === {}){
      return(
        <Text>sssss</Text>
      )
    }
    return(
      <ScrollView>
        {this.renderDeck()}
      </ScrollView>
    )
  }
}
const mapStateToProps = (state) => {
    return{
      deckListInfo:state.demoDeck
    }
}
export default connect(mapStateToProps)(Decks)
