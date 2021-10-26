import './profile.css'
import { useSelector,useDispatch} from "react-redux"
import {Spinner} from "react-bootstrap"
import {addProfile} from '../../redux/actions/profile_actions'
import {useState} from "react"
import {useHistory} from "react-router-dom"

function AddProfile (){
const history=useHistory();
 const user = useSelector (state=>state.userReducer.user)
 const load = useSelector(state=>state.userReducer.load)
 const dispatch= useDispatch()

 const [mobile,setmobile]=useState(0)
 const [section,setsection]=useState("")
 const [school,setschool]=useState("")

 
 
 return (

     <div className="overlay">
        {load ? <Spinner animation="grow" />:

        ( user && user.role==="Prof") &&
       <div className="con">
                 <div className="container">
                   <div className="row gutters">
                     <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                       <div className="card h-100">
                         <div className="card-body">
                           <div className="account-settings">
                             <div className="user-profile">
                               <div className="user-avatar">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
                               </div>
                               <h5 className="user-name">{user && user.firstname} { user && user.lastname} </h5>
                              
                             </div>
                            
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                       <div className="card h-100">
                         <div className="card-body">
                           <div className="row gutters">
                           
                             
                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                               <div className="form-group">
                                 <label htmlFor="phone">رقم الهاتف</label>
                                 <input type="text" className="form-control" id="phone" value={mobile} onChange={(e)=>setmobile(e.target.value)} />
                               </div>
                             </div>
                            
                          
                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                               <div className="form-group">
                                 <label htmlFor="school">المدرسة</label>
                                 <input type="name" className="form-control" id="school" value={school} onChange={(e)=>setschool(e.target.value)} />
                               </div>
                             </div>



                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                               <div className="form-group">
                                 <label htmlFor="ciTy">دائرة التفقد</label>
                                 <input type="name" className="form-control" id="ciTy" value={section} onChange={(e)=>setsection(e.target.value)} />
                               </div>
                             </div>


                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                               <div className="form-group">
                                 <label htmlFor="sTate"></label>
                                  </div>
                             </div>
                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                               <div className="form-group">
                                 <label htmlFor="zIp"></label>
                                  </div>
                             </div>
                           </div>
                           <div className="row gutters">
                             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                               <div className="text-right">
                             
                                 <button type="button" id="submit" name="submit" className="btn btn-primary"
                                onClick={()=>{dispatch(addProfile({mobile,section,school}));history.push('/Profile')}}
                                 
                                 >اضـــــافة</button>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

         </div>}
        

   
   </div>
 

 
     )
}
export default AddProfile