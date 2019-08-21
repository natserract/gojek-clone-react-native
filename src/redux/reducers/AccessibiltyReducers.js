

const INITAL_STATE = {
    ContentPosition: 0
}

const AccsReducer = (state = false, action) => {
    switch(action.type){
        case 'SCROLL_TO_TOP':
            return (
              console.log('This work') 
            )
        default:
            return state
    }
}

export default AccsReducer