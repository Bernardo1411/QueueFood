 const initState = {
    email:'',
    password:''
 }

 export const AuthReducer = (state = initState, action) => { 
    switch(action.type){
         case 'ADD_USER':
             return{
                 ...state,
                 email: action.email,
                 password: action.password
             }
        default: return state
     }
 }