//  import './navBar.css'
import { useDispatch, useSelector } from "react-redux"
import {Link}  from "react-router-dom"
import { logOut } from "../../redux/actions/user_actions"

function NavBar(){
  const auth = useSelector(state=>state.userReducer.isAuth)
  const dispatch=useDispatch()

    return (<div>
    {auth ? 
            <ul style={{ listStyleType:"none",overflow:"hidden",padding: 0,marginTop: 0,backgroundColor:"#101010",flexWrap:"wrap"}}>
                <Link to="/" >
                  <li style={{display: "block",padding: "20px 40px",color: "aliceblue",align: "center",textDecoration: "none",float: "right"}}>
                  الصفحة الرئيسية
                  </li>
                </Link>
                
                <Link to="/SignIn" > 
                  <li style={{display: "block",padding: "20px 40px",color: "aliceblue",align: "center",textDecoration: "none",float: "right"}} onClick={()=>dispatch(logOut())}>
                   الخروج
                  </li>
              </Link>
              </ul>:
            
            
            <ul style={{ listStyleType:"none",overflow:"hidden",padding: 0,marginTop: 0,backgroundColor:"#101010",flexWrap:"wrap"}}>
            <Link to="/" >
              <li style={{display: "block",padding: "20px 40px",color: "aliceblue",align: "center",textDecoration: "none",float: "right"}}>
              الصفحة الرئيسية
              </li>
            </Link>
            
            <Link to="/SignIn" > 
              <li style={{display: "block",padding: "20px 40px",color: "aliceblue",align: "center",textDecoration: "none",float: "right"}}>
              تسجيل الدخول
              </li>
          </Link>

          <Link to ="/SignUp">
            <li style={{display: "block",padding: "20px 40px",color: "aliceblue",align: "center",textDecoration: "none",float: "right"}}>
             اضافة حساب 
            </li>
          </Link>
        </ul>
            
            }
            </div>
      )
}
export default NavBar  