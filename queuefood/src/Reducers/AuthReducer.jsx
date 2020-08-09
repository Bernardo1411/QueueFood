import * as actionType from '../Actions/actionTypes'
import {updatedObject} from '../shared/utility'
 
const initState = {
    authFail: null,
    userRemoved: null
}

export const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SIGN_UP_SUCCESS:
            return updatedObject(state, {authFail: null})
        case actionType.SIGN_UP_FAIL:
            return updatedObject(state, {authFail: action.err.message})
        case actionType.SIGN_IN_SUCCESS:
            return updatedObject(state, {authFail: null})
        case actionType.SIGN_IN_FAIL:
            return updatedObject(state, {authFail: 'Log-in failed.'})
        case actionType.SIGN_OUT_SUCCESS:
            return state
        case actionType.REMOVE_USER:
            return updatedObject(state, {userRemoved: 'User removed'})
        case actionType.REMOVE_USER_FAILED:
            return updatedObject(state, {userRemoved: action.err})
        default: return state
    }
}