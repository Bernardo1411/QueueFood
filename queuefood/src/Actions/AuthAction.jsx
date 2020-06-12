export const SignIn = user =>{
    return{
        type:'SIGN_USER',
        ...user
    }
}

export const addSignIn = newUser =>{
    return{
        type:'SIGN_UP_USER',
        ...newUser
    }
}