import {ADD_DECK, GET_DECK, ADD_CARD} from '../actions'

const INITIAL_STATE = {demoDeck : {}}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_DECK:
          return{
            ...state,
            demoDeck:action.deckList
          }
        case ADD_DECK:
          return{
            ...state
          }
        case ADD_CARD:
          return{
            ...state,
            demoDeck:action.card
          }
        default:
          return state
    }
}

export default reducer