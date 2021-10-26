import './class_pupil.css'
import { useSelector,useDispatch} from "react-redux"
import { useState,useEffect} from "react"
import {useHistory} from "react-router-dom"
import { addClasse} from '../../redux/actions/classe_actions'
import {getProfile} from '../../redux/actions/profile_actions'

function AddClasse (){
  const dispatch= useDispatch()
  const history=useHistory()
  const profile = useSelector (state=>state.profileReducer.profile)
  
  const [nameClass,setName]=useState("")
  const [orderClass,setOrder]=useState("")

 useEffect(()=>{
    dispatch(getProfile())
  
 },[])
 
    return (

        <>
     
        <select className="form-control"style = {{width:"40%"}} value={nameClass} onChange={(e)=>setName(e.target.value)} >
        <option >القسم</option>
        <option value="1">الاولى</option>
        <option value="2">الثانية</option>
        <option value="3">الثالثة</option>
        <option value="4">الرابعة</option>
        <option value="5">الخامسة</option>
        <option value="6">السادسة</option>
      </select>

      <select className="form-control" style = {{width:"40%"}} value={orderClass} onChange={(e)=>setOrder(e.target.value)}>
      <option >الترتيب</option>
        <option value="a">أ</option>
        <option value="b">ب</option>
        <option value="j">ج</option>
        <option value="d">د</option>
        <option value="h">ه</option>
      </select>
     
    
     <button onClick={()=> {dispatch(addClasse({nameClass,orderClass,profileId:profile._id}));history.push('/AddPupils')}}>add </button>
   
     
    
        </>
      )
}
export default AddClasse