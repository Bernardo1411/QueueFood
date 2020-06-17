export const orderProduct = product => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const userId = getState().firebase.auth.uid

        firestore.collection('users').doc(userId).collection('basket').add({
            description: product.description,
            flavour: product.flavour,
            productId: product.id,
            price: product.price,
            productName: product.productName,
            userId
        }).then(() => {
            dispatch({ type: 'ADD_PRODUCT' })
        }).catch(err => {
            dispatch({ type: 'ADD_PRODUCT_FAILED', err })
        })
    }
}

export const deleteItem = (userId, itemId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('users').doc(userId).collection('basket').doc(itemId).delete()
        .then(() => {
            dispatch({ type: 'DELETE_PRODUCT' })
        })
        .catch(() => {
            dispatch({ type: 'DELETE_PRODUCT_FAILED' })
        })
    }
}