 const initState = {
    authFail: null
 }

 export const AuthReducer = (state = initState, action) => { 
    switch(action.type){
         case 'SIGN_UP_SUCCESS':
             return{
                 ...state,
                 authFail: null
             }
        case 'SIGN_UP_FAIL':
            return{
                ...state,
                authFail: action.err.message
            }
        case 'SIGN_IN_SUCCESS':
            return{
                ...state,
                authFail: null
            }
        case 'SIGN_IN_FAIL':
            return{
                ...state,
                authFail: 'Log-in failed.'
            }
            case 'SIGN_OUT_SUCCESS':
                return state
        default: return state
     }
 }