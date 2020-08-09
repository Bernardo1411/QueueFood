import * as actionType from '../Actions/actionTypes'

const initState = {
    toggleOption: false,
    isError: null
}

export const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.TOGGLE_OPTION:
            return{
                ...state,
                toggleOption: action.toggleOption 
            }
        case actionType.ADD_NEW_PRODUCT:
            return{
                ...state,
                isError: null
            }
        case actionType.ADD_NEW_PRODUCT_FAILED:
            return{
                ...state,
                isError: action.err
            }
        default: return state
    }
}