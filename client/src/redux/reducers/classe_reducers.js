import {LOADCLASSES,GETCLASSES,FAIL_CLASSES,GETCLASSE,LOADCLASSE} from '../types/types'

const initState ={
   errors:null,
   classe:null,
   loadClasse:false
}


const ClassReducer=(state=initState,action)=>{
switch (action.type) {

  
    case GETCLASSE :
            return {...state,classe:action.payload,loadClasse:false}

    case LOADCLASSE :
        return {...state,loadClasse:true}
    
   
  // case GETCLASSES :
    //     return {...state,calsses:action.payload.showClass,loadClasses:false}

 // case LOADCLASSES :
    //     return {...state,loadProfile:true}
    case FAIL_CLASSES: 
        return {...state,errors:action.payload.errors,loadClasses:false}
    
   

    default:
        return state
        
}
}
export default ClassReducer