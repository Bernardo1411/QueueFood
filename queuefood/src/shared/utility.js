export const updatedObject = (state, newData) => {
    return {
        ...state,
        ...newData
    }
}