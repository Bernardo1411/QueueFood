import {AuthReducer} from './AuthReducer'
import {OrderReducer} from './OrderReducer' 
import {ProductReducer} from './productReducer'
import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth: AuthReducer,
    order: OrderReducer,
    product: ProductReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer