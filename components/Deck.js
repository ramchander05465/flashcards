import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import TextButton from './TextButton'

class Deck extends Component{
    render(){
        const {title, questions} = this.props.deckInfo
        return(
            <View style={styles.row}>
                <Text style={styles.deckHeading}>{title}</Text>
                <Text style={styles.textStyle}>{questions.length} Cards</Text>                     
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row:{
        flex:1,
        borderRadius: 7,
        backgroundColor:'gray',
        padding:30,
        marginLeft:10,
        marginRight:10,
        marginBottom:20
      },
      deckHeading:{
        color:'white',
        fontSize:25,
        textAlign:'center'
      },
      textStyle:{
        color:'white',
        fontSize:16,
        textAlign:'center'
      }
})

export default Deck