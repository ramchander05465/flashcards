import React from 'react'
import { View, Text } from 'react-native'

import TextButton from './TextButton'

const Card = (props) => {
    return(
        <View>
            <Text>{props.title}</Text>
            <Text>{props.questions.length} Cards</Text>
            <TextButton label="Add Card" onPress={} />
            <TextButton label="Start Quize" onPress={} />
        </View>
    )
}

export default Card