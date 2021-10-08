import {FAIL_PROFILE,LOADPROFILE,GETPROFILE,EDITPROFILE} from '../types/types'
const initState ={
    profile:null,
    loadProfile:false
}


const profileReducer=(state=initState,action)=>{
switch (action.type) {

    case GETPROFILE :
        return {...state,profile:action.payload.profile,loadProfile:false}

    case LOADPROFILE :
        return {...state,loadProfile:true}

    case FAIL_PROFILE: 
        return {...state,errors:action.payload.errors,loadProfile:false}
    
    // case  EDITPROFILE: 
    // return {...state,profile:action.payload,loadProfile:false}

    default:
        return state
        
}
}
export default profileReducer