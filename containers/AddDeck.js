import React, {Component} from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native'
import {connect} from 'react-redux'

import {addDeck} from '../actions'
import {add_Deck} from '../utils/api'
import TextButton from '../components/TextButton'

class AddDeck extends Component{
    state = {deckName:'', status:false}

    deckNameHandler = (txt) => {
        this.setState({deckName:txt})
    }

    addDeckHandler = () => {
        
            const {dispatch} = this.props
            const {deckName} = this.state
            if(deckName !==''){
                add_Deck(deckName)
                    .then((deck) => dispatch(addDeck(JSON.parse(deck))))
                    .then(() => this.props.navigation.navigate('Card', {cardName:deckName}))
            }else{
                alert('Pleae enter deck name')
            }
            this.setState({deckName:'',status:true})
        
    }
    render(){
        return(
            <View style={styles.row}>                
                <Text>Deck Name</Text>
                <TextInput
                    value = {this.state.values}
                    onChangeText = {(text) => this.deckNameHandler(text)} />
                <TextButton 
                    onPress={() => this.addDeckHandler()} 
                    label="Add Deck" 
                    style={styles.submitButton} />
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
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        height: 40,
        justifyContent:'center',
    },
    submitButtonText:{
        color: 'white'
    }
})
 
const mapStateToProps = (state) => {
    return{
      deckListInfo:state.demoDeck
    }
}
export default connect(mapStateToProps)(AddDeck)