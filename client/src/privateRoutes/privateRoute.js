import React from 'react'
import {Route,Redirect} from 'react-router-dom'
function PrivateRoute({component:Component,...rest}){
    const token= localStorage.getItem('token')
    return (
        <div>
            {   token ?  
                    <Route component ={Component} {...rest}/>:<Redirect to='/SignIn'/>
            }
        </div>
    )
}
export default PrivateRoute