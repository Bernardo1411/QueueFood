import {AuthReducer} from './AuthReducer'
import {OrderReducer} from './OrderReducer' 
import {combineReducers} from 'redux'

const RootReducer = combineReducers({
    AuthReducer,
    OrderReducer
})

export default RootReducer