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
        <TextButton 
          onPress={() => this.props.navigation.navigate('AddDeck')}
          label="Add Deck" 
          style={styles.submitButton} />
      )
    }
    return(
      <ScrollView style={{paddingTop:20}}>
        <TextButton 
          onPress={() => this.props.navigation.navigate('AddDeck')}
          label="Add Deck" 
          style={styles.submitButton} />
        {this.renderDeck()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    height: 40,
    justifyContent:'center',
    marginTop:10
  }
})

const mapStateToProps = (state) => {
  return{
    deckListInfo:state.demoDeck
  }
}

export default connect(mapStateToProps)(DeckList)