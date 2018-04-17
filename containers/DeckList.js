import React, { Component } from 'react'
import {View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

import {addDeck, getDeck} from '../actions'
import {get_Deck} from '../utils/api'

import Deck from '../components/Deck'
import TextButton from '../components/TextButton'

class DeckList extends Component{  
  componentDidMount(){
    const {dispatch} = this.props
    get_Deck()
      .then((result) => dispatch(getDeck(result)))
  }

  renderDeck = () => {
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
        <View>
          <Text>No deck available!!</Text>
        </View>
      )
    }
    return(
      <View> 
        <ScrollView style={{paddingTop:10}}>               
          {this.renderDeck()}
        </ScrollView>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#7a42f4',
    width:80,
    height: 40,
    padding:10,
    borderRadius:5,
    marginTop:10,
    marginLeft:10
  }
})

const mapStateToProps = (state) => {
  return{
    deckListInfo:state.demoDeck
  }
}

export default connect(mapStateToProps)(DeckList)