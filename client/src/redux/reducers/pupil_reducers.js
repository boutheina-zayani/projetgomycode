import {LOADPUPIL,LOADPUPILS,GETPUPILS,FAIL_PUPILS,TOOGLEFALSE,TOOGLETRUE} from '../types/types'

const initState ={
   errors:null,
   pupils:[],
   loadPupil:false,
   edit:false
}


const PupilReducer=(state=initState,action)=>{
switch (action.type) {

  
    case GETPUPILS :
            return {...state,pupils:action.payload,loadPupil:false}

  
    case LOADPUPIL :
        return {...state,loadPupil:true}

    case LOADPUPILS :
        return {...state,loadPupil:true}
                        
 
    case FAIL_PUPILS: 
        return {...state,errors:action.payload.errors,loadPupil:false}
    
    case TOOGLEFALSE :
        return {...state,edit:false} 

    case TOOGLETRUE : 
        return {...state,edit:true}

    default:
        return state
        
}
}
export default PupilReducer