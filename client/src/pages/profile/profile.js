 import './profile.css'
 import { useSelector,useDispatch} from "react-redux"
 import {Spinner} from "react-bootstrap"
import { editProfile } from '../../redux/actions/profile_actions'
import {useState} from "react"
 import {useHistory} from "react-router-dom"
 
function Profile (){
  const profile = useSelector (state=>state.profileReducer.profile)
  const loadProfile = useSelector(state=>state.profileReducer.loadProfile)
  const dispatch= useDispatch()
 
  const [firstname,setfirstname]=useState(profile && profile.userId && profile.userId.firstname)
  const [lastname,setlastname]=useState(profile && profile.userId && profile.userId.lastname)
  const [email,setemail]=useState(profile && profile.userId && profile.userId.email)
  const [mobile,setmobile]=useState(profile && profile.mobile)
  const [section,setsection]=useState(profile && profile.section)
  const [school,setschool]=useState(profile && profile.school)
  
  return (

      <div className="overlay">
         {loadProfile ? <Spinner animation="grow" />:

         ( profile && profile.userId.role==="Prof") ?
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
                                <h5 className="user-name">{profile && profile.userId && profile.userId.firstname} { profile && profile.userId && profile.userId.lastname} </h5>
                               
                              </div>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                          <div className="card-body">
                            <div className="row gutters">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mb-2 text-primary">معلومات شخصية </h6>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <label htmlFor="firstName" > الاسم</label>
                                  <input type="text" className="form-control" id="firstName" placeholder="Enter full name" value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
                                </div>
                               
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                               
                                 <div className="form-group">
                                  <label htmlFor="lastName"> اللقب</label>
                                  <input type="text" className="form-control" id="lastName" value={lastname} onChange={(e)=>setlastname(e.target.value)} />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <label htmlFor="phone">رقم الهاتف</label>
                                  <input type="text" className="form-control" id="phone" value={mobile} onChange={(e)=>setmobile(e.target.value)} />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <label htmlFor="eMail">البريد الالكتروني </label>
                                  <input type="email" className="form-control" id="eMail" value={email} onChange={(e)=>setemail(e.target.value)} />
                                </div>
                              </div>
                            </div>
                            <div className="row gutters">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mt-3 mb-2 text-primary">معلومات عامة </h6>
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
                                 onClick={()=>dispatch(editProfile({firstname,lastname,email,mobile,section,school}))}
                                  >تعديل</button>
                                   <button type="button" id="submit" name="submit" className="btn btn-secondary">الغــاء</button>
                               
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

          </div>:"heelo"}
         

    
    </div>
  

  
      )
}
export default Profile