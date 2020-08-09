import * as actionType from './actionTypes'

export const signIn = user => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(() => {
                dispatch({ type: actionType.SIGN_IN_SUCCESS })
            }).catch(() => dispatch({ type: actionType.SIGN_IN_FAIL }))
    }
}

export const signUp = newUser => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        const firestore = getFirebase().firestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });
        }).then(() => {
            dispatch({ type: actionType.SIGN_UP_SUCCESS });
        }).catch(err => {
            dispatch({ type: actionType.SIGN_UP_FAIL, err });
        })
    }
}

export const signUpStore = newStore => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        const firestore = getFirebase().firestore()

        firebase.auth().createUserWithEmailAndPassword(
            newStore.email,
            newStore.password
        ).then(resp => {
            return firestore.collection('store').doc(resp.user.uid).set({
                companyName: newStore.companyName,
                cnpj: newStore.cnpj,
                initials: newStore.companyName[0] + newStore.companyName[1]
            });
        }).then(() => {
            dispatch({ type: actionType.SIGN_UP_SUCCESS });
        }).catch(err => {
            dispatch({ type: actionType.SIGN_UP_FAIL, err });
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(() => {
            dispatch({ type: actionType.SIGN_OUT_SUCCESS })
        })
    }
}

export const removeUser = userId =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase()
        const firestore = getFirebase().firestore()
        firestore.collection('users').doc(userId).delete().then( resp =>{
            firebase.auth().currentUser.delete()
        }).then(resp =>{
            dispatch({type: actionType.REMOVE_USER})
        }).catch(err => {
            dispatch({type: actionType.REMOVE_USER_FAILED, err})
        })
    }
}