import * as actionType from './actionTypes'

export const orderProduct = product => {
    return (dispatch, getState, { getFirebase}) => {
        const firestore = getFirebase().firestore()
        const userId = getState().firebase.auth.uid

        firestore.collection('users').doc(userId).collection('basket').add({
            description: product.description,
            flavour: product.flavour,
            productId: product.id,
            price: product.price,
            productName: product.productName,
            userId
        }).then(() => {
            dispatch({ type: actionType.ADD_PRODUCT })
        }).catch(err => {
            dispatch({ type: actionType.ADD_PRODUCT_FAILED, err })
        })
    }
}

export const deleteItem = (userId, itemId) => {
    return (dispatch, getState, { getFirebase}) => {
        const firestore = getFirebase().firestore()
        firestore.collection('users').doc(userId).collection('basket').doc(itemId).delete()
        .then(() => {
            dispatch({ type: actionType.DELETE_PRODUCT })
        })
        .catch(() => {
            dispatch({ type: actionType.DELETE_PRODUCT_FAILED })
        })
    }
}