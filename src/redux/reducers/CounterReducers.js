

const INITIAL_STATE = null
const countReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}


export default countReducer