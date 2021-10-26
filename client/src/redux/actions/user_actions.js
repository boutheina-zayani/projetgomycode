import axios from 'axios'
import {LOAD_USER,REGISTER,FAIL_USER,LOGIN,CURRENT,LOGOUT,CLEARERROR} from '../types/types'


//Sign Up
export const register=(user,history)=>async (dispatch)=>{
    dispatch ({type:LOAD_USER})



    try {

      const res =await axios.post('/api/Users/SignUp',user)  
      dispatch({type:REGISTER,payload:res.data})
      history.push('/AddProfile')

    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data})
        
    }

} 

//Sign In
export const login=(user,history)=>async (dispatch)=>{
    dispatch ({type:LOAD_USER})
    try {
      const res =await axios.post('/api/Users/SignIn',user)  
      dispatch({type:LOGIN,payload:res.data})
      history.push('/')
        
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data})
    }

}

//Current 
export const current =()=>async (dispatch)=>{
    
    const config={ 
        headers: {Authorization : localStorage.getItem('token')}
     }

    try {
        const res = await axios.get('/api/Users/Current',config)
        dispatch({type:CURRENT,payload:res.data})
        
    } catch (error) {
        console.log(error.response.data)
    }
}
 
export const logOut=()=>{
    return {type:LOGOUT}

}
export const clearerror =()=>{
    return {type:CLEARERROR}
}