import {AuthReducer} from './AuthReducer'
import {OrderReducer} from './OrderReducer' 
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: AuthReducer,
    order: OrderReducer
})

export default rootReducer