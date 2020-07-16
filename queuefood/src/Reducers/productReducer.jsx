const initState = {
    toggleOption: false
}

export const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_OPTION':
            return{
                ...state,
                toggleOption: action.toggleOption 
            }
        default: return state
    }
}