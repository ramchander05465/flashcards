export const GET_DECK_LIST = 'GET_DECK_LIST'

export const getDeckList = (deckList) => {
    return {
        type:GET_DECK_LIST,
        deckList
    }
}