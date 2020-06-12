 const initState = {
    firstName:'',
    lastName:'',
    email:'',
    password:''
 }

 export const AuthReducer = (state = initState, action) => { 
    switch(action.type){
         case 'SIGN_UP_USER':
             return{
                 ...state,
                 firstName: action.firstName,
                 lastName: action.lastName,
                 email: action.email,
                 password: action.password
             }
        default: return state
     }
 }