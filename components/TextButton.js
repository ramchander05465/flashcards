import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const TextButton = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <Text>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default TextButton