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
            dispatch({ type: 'SIGN_UP_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'SIGN_UP_FAIL', err });
        })
    }
}

export const signUpStore = newStore => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        const firestore = getFirebase().firestore()

        console.log(newStore)
        firebase.auth().createUserWithEmailAndPassword(
            newStore.email,
            newStore.password
        ).then(resp => {
            return firestore.collection('store').doc(resp.user.uid).set({
                firstName: newStore.companyName,
                lastName: newStore.cnpj,
                initials: newStore.companyName[0] + newStore.companyName[1]
            });
        }).then(() => {
            dispatch({ type: 'SIGN_UP_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'SIGN_UP_FAIL', err });
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
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase()
        const firestore = getFirebase().firestore()
        firestore.collection('users').doc(userId).delete().then( resp =>{
            firebase.auth().currentUser.delete()
        }).then(resp =>{
            dispatch({type:'REMOVE_USER'})
        }).catch(err => {
            dispatch({type:'REMOVE_USER_FAILED', err})
        })
    }
}