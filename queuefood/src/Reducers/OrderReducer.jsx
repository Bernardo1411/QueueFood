import * as actionType from '../Actions/actionTypes'

const initState = {
    isOrderCompleted: null,
}

export const OrderReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_PRODUCT:
            return {
                ...state,
                isOrderCompleted: 'Good deal'
            }
        case actionType.ADD_PRODUCT_FAILED:
            return {
                ...state,
                isOrderCompleted: null
            }
        case actionType.DELETE_PRODUCT:
            return {
                ...state,
                isOrderCompleted: 'Order deleted'
            }
        case actionType.DELETE_PRODUCT_FAILED:
            return {
                ...state,
                isOrderCompleted: null
            }
        default: return state
    }
}