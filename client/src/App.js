 import Login from "./pages/login/login.js";
 import Register from "./pages/register/register";
 import {BrowserRouter,Route,Switch} from "react-router-dom"
 import NavBar from "./components/navBar/navBar"
 import Home from "./pages/home/home"
 import NotFound from "./pages/notfound/notFound" 
import Profile from "./pages/profile/profile"
import AddProfile from "./pages/profile/addProfile"
import PrivateRoute from "./privateRoutes/privateRoute.js";
import {useEffect} from "react"
import { current } from './redux/actions/user_actions'
import { getProfile } from './redux/actions/profile_actions'
import AddClasse from './pages/class/class'
import AddPupils from './pages/class/AddPupil'
import {useDispatch} from "react-redux"

function App() {
  const dispatch= useDispatch()
  useEffect(()=>{
    if(localStorage.getItem("token")){
       dispatch(current())
       dispatch(getProfile())
    }
   
},[])

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
          <PrivateRoute exact path="/AddProfile" component={AddProfile}/> 
          <PrivateRoute exact path='/Classe' component={AddClasse}/> 
          <PrivateRoute exact path='/AddPupils' component={AddPupils}/> 
          <Route  path='/*' component={NotFound}/> 
         
      </Switch>
     
      </div>
    </BrowserRouter>
  );
}

export default App;
