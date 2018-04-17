import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import {add_Card} from '../utils/api'
import {addCard} from '../actions'
import TextButton from '../components/TextButton';

class AddCard extends Component{
    cardName = this.props.navigation.state.params.cardName
    state = {question:'', answer:'', status:false}
    
    AddCardHandler = () => {
        if(this.state.question !== ''){
            const {dispatch} = this.props
            const data = {question:this.state.question, answer:this.state.answer}
            let dataList = this.props.deckListInfo
            dataList[this.cardName].questions.push(data)
            
            add_Card(dataList).then((card) => dispatch(addCard(JSON.parse(card))))

            this.setState({question:'', answer:'', status:true}) 
        }       
    }

    render(){
        return(
            <View style={styles.row}>              
                <Text style={styles.label}>question</Text>
                <TextInput
                    value={this.state.question}
                    style={{padding:5}}
                    onChangeText={(text) => this.setState({question: text})} />
            
                <Text style={styles.label}>Answer</Text>
                <TextInput
                    value={this.state.answer}
                    style={{padding:5}}
                    onChangeText={(text) => this.setState({answer: text})} />
                
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
    label:{
        fontSize:16,
        paddingTop:20
     }
})
const mapStateToProps = (state) => {
    return{
      deckListInfo:state.demoDeck
    }
}
export default connect(mapStateToProps)(AddCard)