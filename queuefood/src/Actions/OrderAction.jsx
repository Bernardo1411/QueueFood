export const orderProduct = product =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore()
        const userId = getState().firebase.auth.uid

        firestore.collection('basket').add({
            ...product,
            userId
        }).then(() =>{
            dispatch({type:'ADD_PRODUCT'})
        }).catch(err =>{
            dispatch({type:'ADD_PRODUCT_FAILED', err})
        })
    }
}

export const deleteItem = itemId =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore()
        
        firestore.collection('basket').doc(itemId).delete()
    }
}