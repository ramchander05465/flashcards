import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import TextBox from '../components/TextBox'
import TextButton from '../components/TextButton';

class AddDeck extends Component{
    state = {
        input:'welcome'
    }
    deckNameHandler = () => {

    }

    addDeckHandler = () => {

    }
    render(){
        return(
            <View>
                <TextBox label="Deck Name" values = {this.state.input} onChange={this.deckNameHandler} />
                <TextButton onPress={this.addDeckHandler} label="Add Deck" style={styles.submitButton} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
export default AddDeck