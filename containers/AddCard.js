import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import TextBox from '../components/TextBox'
import TextButton from '../components/TextButton';

class AddCard extends Component{
    state = {
        input:'welcome'
    }
    cardNameHandler = () => {

    }

    AddCardHandler = () => {

    }
    render(){
        return(
            <View>
                <TextBox label="Question" values = {this.state.input} onChange={this.cardNameHandler} />
                <TextBox label="Answer" values = {this.state.input} onChange={this.cardNameHandler} />
                <TextButton onPress={this.AddCardHandler} label="Add Card" style={styles.submitButton} />
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
export default AddCard