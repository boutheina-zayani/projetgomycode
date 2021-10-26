  // import './navbar.css'
import { useDispatch, useSelector } from "react-redux"
import {Link}  from "react-router-dom"
import { logOut } from "../../redux/actions/user_actions"
import { getProfile } from "../../redux/actions/profile_actions"

function NavBar(){
  const auth = useSelector(state=>state.userReducer.isAuth)
  const dispatch=useDispatch()
  const token= localStorage.getItem('token')
    return (<div>
    {token && auth ?


// <div className="menu">
//   <div className="label">تبعني</div>
//   <div className="spacer" />
     
//   <Link to="/" > <div className="item"><span>الصفحة الرئيسية</span></div></Link>
//   <Link to="/Profile"><div className="item"><span onClick={()=>dispatch(getProfile())}>الملف الشخصي </span></div></Link>
//   <Link to="/Classe"><div className="item"><span>القسم</span></div></Link>
//   <Link to="/SignIn" ><div className="item"><span>خروج</span> </div></Link>

// </div>

<ul style={{ fontWeight:"bold",listStyleType:"none",overflow:"hidden",padding: 0,marginTop: 0,backgroundColor:"transparent",flexWrap:"wrap"}}>
<Link to="/" ><li style={{display: "block",padding: "20px 40px",color: "#8A8B95",align: "center",textDecoration: "none",float: "right"}}>الصفحة الرئيسية</li></Link>
<Link to="/Profile">  <li style={{display: "block",padding: "20px 40px",color: "#8A8B95",align: "center",textDecoration: "none",float: "right"}}  onClick={()=>dispatch(getProfile())}>الملف الشخصي </li></Link>
<Link to="/Classe"><li style={{display: "block",padding: "20px 40px",color: "#8A8B95",align: "center",textDecoration: "none",float: "right"}}>القسم</li></Link>
<Link to="/SignIn" >  <li style={{display: "block",padding: "20px 40px",color: "#8A8B95",align: "center",textDecoration: "none",float: "right"}}>خروج </li></Link>
</ul>


            
           : <ul style={{ fontWeight:"bold",listStyleType:"none",overflow:"hidden",padding: 0,marginTop: 0,backgroundColor:"transparent",flexWrap:"wrap"}}>
 
              <Link to="/SignIn" > 
                  <li style={{display: "block",padding: "20px 40px",color: "#8A8B95",align: "center",textDecoration: "none",float: "right"}}>
                  تسجيل الدخول
                  </li>
              </Link>

              <Link to ="/SignUp">
                <li style={{display: "block",padding: "20px 40px",color: "#8A8B95",align: "center",textDecoration: "none",float: "right"}}>
                اضافة حساب 
                </li>
              </Link>
            </ul>
            
            }
            </div>
      )
}
export default NavBar  