import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import TextButton from '../components/TextButton';

class Queze extends Component{
    state = {
        input:'welcome'
    }

    QuezeHandler = () => {

    }
    render(){
        return(
            <View>
                <Text>Question</Text>
                <Text>Answer</Text>
                <TextButton onPress={this.QuezeHandler} label="Currect" style={styles.submitButton} />
                <TextButton onPress={this.QuezeHandler} label="Incorrect" style={styles.submitButton} />
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
        marginTop:10
    },
    submitButtonText:{
    color: 'white'
    }
})
export default Queze