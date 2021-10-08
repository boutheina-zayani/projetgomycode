import './register.css'
import { useState } from "react";
import { useDispatch} from "react-redux"
import {register} from "../../redux/actions/user_actions.js"
import {useHistory} from "react-router-dom"
function Register(){
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const history =useHistory()


  const dispatch =useDispatch()
  return (

    <div className="overlay">
      
      <form onSubmit={(e)=>e.preventDefault()}>
        
        <div className="con">
          
          <header className="head-form">
            <h2>اضافة حساب جديد</h2>
            <p></p>
          </header>
           <br />
           <input type="text" id="lname" name="" className="lname" placeholder="الإسم" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
          <input type="text" id="lname" name="password" className="lname" placeholder="اللقب" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
           <input type="text" id="lname" name="email" className="lname" placeholder="البريد الالكتروني" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" id="lname" name="password" className="lname" placeholder="كلمة السر" value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <button
           onClick={()=>dispatch(register({firstname,lastname,email,password},history))}>
              تسجيــــل</button>

        </div>
  </form>
    
    </div>
  )
}
export default Register