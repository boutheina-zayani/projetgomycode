import {LOAD_USER,REGISTER,FAIL_USER,LOGIN,CURRENT,LOGOUT,CLEARERROR} from '../types/types'
const initState ={
user:null,
errors:null,
isAuth:false,
load:false
}


const userReducer=(state=initState,action)=>{
switch (action.type) {
    case LOAD_USER :
        return { ...state,load:true}

    case REGISTER : 

        localStorage.setItem("token",action.payload.token)
        return {...state,user:action.payload.new_user,load:false,isAuth:true}

    case LOGIN : 
    
        localStorage.setItem("token",action.payload.token)
        return {...state,user:action.payload.found_user,load:false,isAuth:true}

    case CURRENT :
        return {...state,isAuth:true,user:action.payload.user}


    case FAIL_USER: 
        return {...state,errors:action.payload.errors,load:false}
    
    case LOGOUT:
        localStorage.removeItem("token")
        return {...state,user:null,errors:null,isAuth:false,load:false}    

    case CLEARERROR:
         return {...state,errors:null}
    default:
        return state
        
}
}
export default userReducer