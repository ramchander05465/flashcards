import {AsyncStorage} from 'react-native'

export const add_Deck = (key) => {     
    const obj = JSON.stringify({[key]:{title: key, questions: []}})
    return AsyncStorage.mergeItem('deckList', obj).then(() => (obj))
}

export const get_Deck = () => {
    return AsyncStorage.getItem('deckList')
        .then((result) => JSON.parse(result))
}

export const add_Card = (key, data) => {
    return AsyncStorage.getItem('deckList')
        .then((result) => {
            const response = JSON.parse(result)
            response[key].questions.push(data)
            AsyncStorage.setItem('deckList', JSON.stringify(response))
        })
}