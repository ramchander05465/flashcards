import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'

import TextButton from '../components/TextButton';

class Quez extends Component{
    cardName = this.props.navigation.state.params.cardName
    questionList = this.props.deckListInfo[this.cardName].questions
    state = {quesCount:0, ansCount:0, isHelp:false}

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return{
            headerTitle: params.cardName
        }
    }

    QuezeHandler = (ansType) => {
        if(ansType === 'correct'){
            this.setState({
                quesCount: this.state.quesCount+1,
                ansCount: this.state.ansCount+1,
                isHelp: false
            })
        }else{
            this.setState({quesCount: this.state.quesCount+1, isHelp: false})
        }
    }

    renderResult = () => {
        return(
            <View>
                <Text>Currect {((this.state.ansCount*100)/this.questionList.length).toFixed(2)}%</Text>
                <TextButton 
                    onPress={() => this.setState({quesCount:0, ansCount:0, isHelp:false })} 
                    label="Restart Quiz" 
                    style={styles.submitButton} />
                <TextButton 
                    onPress={() => this.props.navigation.navigate('Card', {cardName:this.cardName})} 
                    label="Back to Deck" 
                    style={styles.submitButton} />
            </View>
        )
    }

    renderQuestion = () => {
        return(
            <View>
                <Text>Question No   {this.state.quesCount+1}/{this.questionList.length}</Text>
                <Text>{this.questionList[this.state.quesCount].question}</Text>
                {this.state.isHelp 
                ? <Text>{this.questionList[this.state.quesCount].answer}</Text>
                : <TextButton onPress={() => this.setState({isHelp:true})} label="Show Answer" style={styles.submitButton} />
                }
                <TextButton onPress={() => this.QuezeHandler('correct')} label="Currect" style={styles.submitButton} />
                <TextButton onPress={() => this.QuezeHandler('incorrect')} label="Incorrect" style={styles.submitButton} />
            </View>
        )
    }

    render(){
        if(this.questionList.length === 0){
            return(
                <View>
                    <Text>No Cards available!!</Text>
                    <TextButton 
                    onPress={() => this.props.navigation.navigate('Card', {cardName:this.cardName})} 
                    label="Back to Deck" 
                    style={styles.submitButton} />
                </View>
            )
        }
        return(
            <View style={styles.row}>
                {this.questionList.length === this.state.quesCount
                ? this.renderResult()
                : this.renderQuestion()
                }
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
        marginTop:10
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

export default connect(mapStateToProps)(Quez)