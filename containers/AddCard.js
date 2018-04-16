import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

import {add_Card} from '../utils/api'
import {addCard} from '../actions'
import TextButton from '../components/TextButton';

class AddCard extends Component{
    cardName = this.props.navigation.state.params.cardName
    state = {question:'', answer:'', status:false}
    
    AddCardHandler = () => {
        const {dispatch} = this.props
        const data = {question:this.state.question, answer:this.state.answer}

        add_Card(this.cardName, data).then((card) => dispatch(addCard(card)))

        this.setState({question:'', answer:'', status:true})        
    }

    render(){
        return(
            <View style={styles.row}>
                <View>
                    <Text style={styles.label}>question</Text>
                    <TextInput
                        value={this.state.question}
                        style={styles.input}
                        onChangeText={(text) => this.setState({question: text})} />
                </View>
                <View>
                    <Text style={styles.label}>Answer</Text>
                    <TextInput
                        value={this.state.answer}
                        style={styles.input}
                        onChangeText={(text) => this.setState({answer: text})} />
                </View>
                <TextButton 
                    onPress={() => this.AddCardHandler()} 
                    label="Add Card" 
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
        alignItems: 'center'
    },
    submitButtonText:{
        color: 'white'
    },
    input: {
        height: 40,
        width:150,
    },
    label:{
         fontSize:25,
     }
})

export default AddCard