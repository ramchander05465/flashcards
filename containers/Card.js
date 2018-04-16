import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'

import TextButton from '../components/TextButton'

class Card extends Component{
    render(){
        const cardName = this.props.navigation.state.params.cardName
        const cardInfo = this.props.deckListInfo[cardName]
        
        return(
            <View style={styles.row}>
                <Text style={styles.deckHeading}>{cardInfo.title}</Text>
                <Text style={styles.textStyle}>{cardInfo.questions.length} Cards</Text>
                <TextButton 
                    label="Add Card"
                    onPress={() => this.props.navigation.navigate('AddCard', {cardName:cardName})}
                    style={[styles.submitButton, {backgroundColor: 'green',}]}/>
            
                <TextButton 
                    label="Start Quize"
                    onPress={() => this.props.navigation.navigate('Quiz', {cardName:cardName})}
                    style={[styles.submitButton, {backgroundColor: 'red',}]}/>
                
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
        margin:10
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
      },
      submitButton: {
        padding: 10,
        height: 40,
        justifyContent:'center',
        marginTop:10,
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => {
    return{
      deckListInfo:state.demoDeck
    }
}

export default connect(mapStateToProps)(Card)