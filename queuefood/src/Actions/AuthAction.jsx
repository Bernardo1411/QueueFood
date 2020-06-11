export const addSignIn = newUser =>{
    return{
        type:'ADD_USER',
        ...newUser
    }
}