import React from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native'
import TextBotton from './TextButton'

const TextBox = ({label, onChange, values}) => {
    const getData = (text) => {
    } 

    return(
        <View>
            <Text>{label}</Text>
            <TextInput
                value={values}
                style={styles.input}
                onChange = {(text) => getData(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
       height: 40,
       width:150,
    },
    label:{
        fontSize:25,
    }
 })
export default TextBox