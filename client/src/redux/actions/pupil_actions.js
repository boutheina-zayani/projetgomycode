import {LOADPUPIL,LOADPUPILS,GETPUPILS,FAIL_PUPILS,TOOGLETRUE,TOOGLEFALSE} from '../types/types'
import {getClasse} from '../actions/classe_actions'


import axios from "axios"

export const getPupils=(id)=>async (dispatch)=>{
  
    dispatch ({type:LOADPUPILS})
    try {

      const res =await axios.get(`/api/Pupils/${id}`)  
      console.log(res.data)
    dispatch({type:GETPUPILS,payload:res.data.showPupils})
      
    
      
    } catch (error) {
        dispatch({type:FAIL_PUPILS,payload:error.response.data})
        
    }

}


export const addPupil=(id,pupil)=> async (dispatch)=>{
  
  try {
    const res= await axios.post(`/api/Pupils/${id}`,pupil)
    dispatch(getPupils(id))
    
  } catch (error) {
     console.log(error)
    }
}


export const deletePupil=(id)=> async (dispatch)=>{
  try {
       const res= await axios.delete(`/api/Pupils/${id}`)
        dispatch(getPupils(res.data.classe._id))
  } catch (error) {
      console.log(error)
  }

}

export const toogletrue=()=>{
  return {type :TOOGLETRUE}
}

export const tooglefalse=()=>{
  return {type :TOOGLEFALSE}
}

export const editPupil= (id,newPupil)=>async (dispatch)=>{
  try {
      const res = await axios.put(`/api/Pupils/${id}`,newPupil)
      dispatch(getPupils(res.data.EditPupil.classId))
  } catch (error) {
      console.log(error)
  }

}