const initState = {
    isOrderCompleted: null,
}

export const OrderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                isOrderCompleted: 'Good deal'
            }
        case 'ADD_PRODUCT_FAILED':
            return {
                ...state,
                isOrderCompleted: null
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                isOrderCompleted: 'Order deleted'
            }
        case 'DELETE_PRODUCT_FAILED':
            return {
                ...state,
                isOrderCompleted: null
            }
        default: return state
    }
}