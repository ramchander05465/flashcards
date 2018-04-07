import {GET_DECK_LIST} from '../actions'

const INITIAL_STATE = {demoDeck : {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_DECK_LIST:
            return{
                ...state
            }
        default:
            return state
    }
}

export default reducer