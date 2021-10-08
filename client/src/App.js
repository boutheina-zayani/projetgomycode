 import Login from "./pages/login/login.js";
 import Register from "./pages/register/register";
 import {BrowserRouter,Route,Switch} from "react-router-dom"
 import NavBar from "./components/navBar/navBar"
 import Home from "./pages/home/home"
 import NotFound from "./pages/notfound/notFound" 
import Profile from "./pages/profile/profile"
import PrivateRoute from "./privateRoutes/privateRoute.js";
import {useEffect} from "react"
import { current } from './redux/actions/user_actions'
import {useDispatch} from "react-redux"

function App() {
  const dispatch= useDispatch()
//   useEffect(()=>{
//     if(localStorage.getItem("token")){
//        dispatch(current())
//     }
   
// },[])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact  path='/' component={Home} />
          <Route exact  path='/Home' component={Home} />
          <Route exact  path='/SignIn' component={Login}/>
          <Route exact  path='/SignUp' component={Register}/>
          <PrivateRoute exact path="/Profile" component={Profile}/>
          <Route  path='/*' component={NotFound}/> 
      </Switch>
     
      </div>
    </BrowserRouter>
  );
}

export default App;
