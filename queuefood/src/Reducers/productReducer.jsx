import * as actionType from '../Actions/actionTypes'
import {updatedObject} from '../shared/utility'
 
const initState = {
    toggleOption: false,
    isError: null
}

export const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.TOGGLE_OPTION:
            return updatedObject(state, {toggleOption: action.toggleOption})
        case actionType.ADD_NEW_PRODUCT:
            return updatedObject(state, {isError: null})
        case actionType.ADD_NEW_PRODUCT_FAILED:
            return updatedObject(state, {isError: action.err})
        default: return state
    }
}