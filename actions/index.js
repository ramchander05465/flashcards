export const ADD_DECK = 'ADD_DECK'
export const GET_DECK = 'GET_DECK'

export const ADD_CARD = 'ADD_CARD'


export const addDeck = (deck) => {
    return{
        type:ADD_DECK,
        deck
    }
}
export const getDeck = (deckList) => {
    return {
        type:GET_DECK,
        deckList
    }
}

export const addCard = (card) => {
    console.log('Card has been added ',card)
    return {
        type:ADD_CARD,
        card
    }
}