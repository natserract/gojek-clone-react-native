
import { combineReducers } from 'redux'
import countReducers from './CounterReducers'
import AccesReducers from './AccessibiltyReducers'
import NavReducers from './NavReducers'


const rootReducers = combineReducers({
    data: countReducers,
    accessibility: AccesReducers,
    nav: NavReducers
})

export default rootReducers