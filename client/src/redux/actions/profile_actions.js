
import {LOADPROFILE,GETPROFILE,FAIL_PROFILE,EDITPROFILE} from '../types/types'

import axios from "axios"

export const getProfile=()=>async (dispatch)=>{
  const config={ 
    headers: {Authorization : localStorage.getItem('token')}
 }

    dispatch ({type:LOADPROFILE})
    try {

      const res =await axios.get('/api/Profiles/ShowProfile',config)  
      dispatch({type:GETPROFILE,payload:res.data})
      
    
      
    } catch (error) {
        dispatch({type:FAIL_PROFILE,payload:error.response.data})
        
    }

}





export const editProfile=(profile)=> async (dispatch)=>{
  const config={
      headers:{Authorization:localStorage.getItem('token')
      }
  }
  try {

   const res= await axios.post('/api/Profile/EditProfile',profile,config)
dispatch(getProfile())
  } catch (error) {
     console.log(error)
    }
}