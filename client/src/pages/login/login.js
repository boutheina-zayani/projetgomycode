import './login.css'
import { useState } from "react";
import { useDispatch,useSelector} from "react-redux"
import {login,clearerror} from "../../redux/actions/user_actions.js"
import {useHistory} from "react-router-dom"

function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch =useDispatch()
  const history =useHistory()
  const error =useSelector(state=>state.userReducer.errors)

  return (

    <div className="overlay">
      
 {error ? error.map(el => <div> {el.msg} </div>): null }
        
        <div className="con">
          <form onSubmit={(e)=>e.preventDefault()}>
          <header className="head-form">
            <h2>تسجيل الدخول</h2>
            <p>تسجيل الدخول هنا باستخدام اسم المستخدم وكلمة المرور الخاصة بك</p>
          </header>
          <br />
          <input type="text" id="lname" name="email" className="lname" placeholder="البريد الالكتروني"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
          
          <input type="password" id="lname" name="password" className="lname" placeholder="كلمة السر" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={()=>dispatch(login({email,password},history))}> دخـــول</button>
          <button> هل نسيت كلمة السر ؟</button>
        </form>
        </div>
  
     
    </div>
  )
}
export default Login