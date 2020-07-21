export const toggleOption = option =>{
    return {
        type: "TOGGLE_OPTION",
        toggleOption: option
    }
}

export const insertProduct = product =>{
    return (dispatch, getState, { getFirebase}) => {
        const firestore = getFirebase().firestore()
        const userId = getState().firebase.auth.uid

        firestore.collection('store').doc(userId).collection('listOfProducts').add({
            description: product.description,
            flavour: product.flavour,
            price: product.price,
            size: product.size,
            productName: product.productName,
            userId
        }).then(() => {
            dispatch({ type: 'ADD_NEW_PRODUCT' })
        }).catch(err => {
            dispatch({ type: 'ADD_NEW_PRODUCT_FAILED', err })
        })
    }
}