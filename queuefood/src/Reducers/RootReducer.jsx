import {AuthReducer} from './AuthReducer'
import {OrderReducer} from './OrderReducer' 
import {combineReducers} from 'redux'

const RootReducer = combineReducers({
    auth: AuthReducer,
    order: OrderReducer
})

export default RootReducer