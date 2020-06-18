export const signIn = user => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(() => {
                dispatch({ type: 'SIGN_IN_SUCCESS' })
            }).catch(() => dispatch({ type: 'SIGN_IN_FAIL' }))
    }
}

export const signUp = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            }).then(() => {
                dispatch({ type: 'SIGN_UP_SUCCESS' })
            })
        }).catch(err => {
            dispatch({ type: 'SIGN_UP_FAIL', err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGN_OUT_SUCCESS' })
        })
    }
}

export const removeUser = userId =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().currentUser.delete().then(()=>{
            return firestore.collection('users').doc(userId).delete()
        }).then(resp =>{
            dispatch({type:'REMOVE_USER'})
        }).catch(err => {
            dispatch({type:'REMOVE_USER_FAILED', err})
        })
    }
}