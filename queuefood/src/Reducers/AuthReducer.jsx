import * as actionType from '../Actions/actionTypes'

const initState = {
    authFail: null,
    userRemoved: null
}

export const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SIGN_UP_SUCCESS:
            return {
                ...state,
                authFail: null
            }
        case actionType.SIGN_UP_FAIL:
            return {
                ...state,
                authFail: action.err.message
            }
        case actionType.SIGN_IN_SUCCESS:
            return {
                ...state,
                authFail: null
            }
        case actionType.SIGN_IN_FAIL:
            return {
                ...state,
                authFail: 'Log-in failed.'
            }
        case actionType.SIGN_OUT_SUCCESS:
            return state
        case actionType.REMOVE_USER:
            return {
                ...state,
                userRemoved: 'User removed'
            }
        case actionType.REMOVE_USER_FAILED:
            return {
                ...state,
                userRemoved: action.err
            }
        default: return state
    }
}