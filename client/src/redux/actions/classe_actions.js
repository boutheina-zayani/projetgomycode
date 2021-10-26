import {LOADCLASSES,GETCLASSES,FAIL_CLASSES,GETCLASSE,LOADCLASSE} from '../types/types'

import axios from "axios"

export const getClasses=()=>async (dispatch)=>{
  const config={ 
    headers: {Authorization : localStorage.getItem('token')}
 }

    dispatch ({type:LOADCLASSES})
    try {

      const res =await axios.get('/api/Classes/ShowClasses',config)  
      dispatch({type:GETCLASSES,payload:res.data})
      
    
      
    } catch (error) {
        dispatch({type:FAIL_CLASSES,payload:error.response.data})
        
    }

}


export const getClasse=(id)=>async (dispatch)=>{
  const config={ 
    headers: {Authorization : localStorage.getItem('token')}
 }

    dispatch ({type:LOADCLASSE})
    try {

      const res =await axios.get(`/api/Classes/${id}`,config)  
      dispatch({type:GETCLASSE,payload:res.data.getOne})
      
    
      
    } catch (error) {
        dispatch({type:FAIL_CLASSES,payload:error.response.data})
        
    }

}




export const addClasse=(classe)=> async (dispatch)=>{
  
  const config={ 
    headers: {Authorization : localStorage.getItem('token')}
 }

 
  try {

   const res= await axios.post(`/api/Classes/AddClasse`,classe,config)
   console.log(res)
dispatch(getClasse(res.data.AddClass._id))
  } catch (error) {
     console.log(error)
    }
}