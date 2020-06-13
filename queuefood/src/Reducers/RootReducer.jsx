import {AuthReducer} from './AuthReducer'
import {OrderReducer} from './OrderReducer' 
import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth: AuthReducer,
    order: OrderReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer