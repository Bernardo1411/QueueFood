import * as actionType from '../Actions/actionTypes'
import {updatedObject} from '../shared/utility'

const initState = {
    isOrderCompleted: null,
}

export const OrderReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_PRODUCT:
            return updatedObject(state, {isOrderCompleted: 'Good deal'})
        case actionType.ADD_PRODUCT_FAILED:
            return updatedObject(state, {isOrderCompleted: null})
        case actionType.DELETE_PRODUCT:
            return updatedObject(state, {isOrderCompleted: 'Order deleted'})
        case actionType.DELETE_PRODUCT_FAILED:
            return updatedObject(state, {isOrderCompleted: null})
        default: return state
    }
}