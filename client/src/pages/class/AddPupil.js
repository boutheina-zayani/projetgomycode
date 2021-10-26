import './class_pupil.css'
import {Dropdown} from 'react-bootstrap'
import {Spinner} from "react-bootstrap"
import { useSelector,useDispatch} from "react-redux"
import { useState,useEffect} from "react"
import { getClasse} from '../../redux/actions/classe_actions'
import {addPupil,deletePupil,getPupils,editPupil} from '../../redux/actions/pupil_actions'
import {getProfile} from '../../redux/actions/profile_actions'
import {Modal,Button} from "react-bootstrap"
function AddPupils (){
  const dispatch= useDispatch()



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  var n = 0;
   const [fp,setFP]=useState("")
   const [lp,setLP]=useState("")
   const [cp,setCP]=useState("")

   const [ufp,setUFP]=useState("")
   const [ulp,setULP]=useState("")
   const [ucp,setUCP]=useState("")



   const increment=()=>{n++;return n;}

  useEffect(()=>{
    
    dispatch(getClasse(classe && classe._id))
    dispatch(getPupils(classe && classe._id))
 },[])
 
 const classe = useSelector (state=>state.ClassReducer.classe)
 const load =  useSelector (state=>state.ClassReducer.loadClasse)


 const pupils = useSelector (state=>state.PupilReducer.pupils)
 const loadp = useSelector (state=>state.PupilReducer.loadPupil)

    return (

        <>
     
      
     {(classe && load )    ? <Spinner animation="grow" />
    : <div> 
      <li>{classe && classe.nameClass}</li>
            <li>{classe && classe.orderClass}</li>
       

       
          <section className="u-align-center u-clearfix u-section-1" id="carousel_f202">
          
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            
              <div className="u-expanded-width u-table u-table-responsive u-table-1">
                <table className="u-table-entity u-table-entity-1">
                  <colgroup>
                    <col width="10%" />
                    <col width="30%" />
                    <col width="32%" />
                    <col width="28%" />
                    
                  </colgroup>

                  <thead className="u-align-center u-palette-4-base u-table-header u-table-header-1">
                    <tr style={{height: '65px'}}>
                      <th className="u-align-center u-border-5 u-border-white u-table-cell u-white u-table-cell-1">الرتبة</th>
                      <th className="u-border-5 u-border-white u-table-cell"><b>الاسم</b></th>
                      <th className="u-border-5 u-border-white u-table-cell"><b>اللقب&nbsp;</b></th>
                      <th className="u-border-5 u-border-white u-palette-3-base u-table-cell u-table-cell-4"><b>الجنس</b></th>
                    </tr>
                  </thead>


          <tbody className="u-align-center u-table-body">


          {loadp && <Spinner animation="grow" />}
          {classe &&  pupils && pupils.map(el => <tr style={{height: '65px'}}>
                  <td className="u-align-center u-border-5 u-border-white u-first-column u-grey-5 u-table-cell u-table-cell-21">{increment()}</td>
                  <td className="u-border-5 u-border-white u-table-cell"><b>{el.firstname}</b></td>
                  <td className="u-border-5 u-border-white u-table-cell"><b>{el.lastname}</b></td>
                  <td className="u-border-5 u-border-white u-table-cell"><b>{el.civility}</b></td>
                  <td className="u-border-5 u-border-white u-palette-3-light-3 u-table-cell u-table-cell-24" ><b>
                 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"  style={{fill: "red", width:"15px",height:"15px"}} onClick={()=>dispatch(deletePupil(el._id))}>
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"  style={{fill: "green", width:"15px",height:"15px"}} onClick={handleShow}>
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>

                    <Modal show={show} onHide={handleClose}>
                      
                      <Modal.Body>
             <input type="text" className="form-control" id="firstname"    value={ufp} onChange={(e)=>setUFP(e.target.value)}/>
             <input type="text" className="form-control" id="lastname"   value={ulp} onChange={(e)=>setULP(e.target.value)}/>
              <select className="form-control" value={ucp} onChange={(e)=>setUCP(e.target.value)}>  
                  <option >انقر هنا </option>
                  <option value="h">ذكر </option>
                  <option value="f">أنثى </option>
              </select>

                      </Modal.Body>
                    <Modal.Footer>
                       
                        <Button variant="primary" onClick={()=>{dispatch(editPupil(el._id,{firstname:ufp,lastname:ulp,civility:ucp}));handleClose()}}>
                          تعديــل
                        </Button>
                      </Modal.Footer>
                    </Modal>
              </b></td>
                </tr>

              
                  
              )   
                  
          }

            <tr style={{height: '65px'}}>
              <td className="u-align-center u-border-5 u-border-white u-first-column u-grey-5 u-table-cell u-table-cell-21">{increment()}</td>
             
              <td className="u-border-5 u-border-white u-table-cell"> <input type="text" className="form-control" id="firstname"  style={{background:"transparent", border:"none"}}  value={fp} onChange={(e)=>setFP(e.target.value)}/></td>
              <td className="u-border-5 u-border-white u-table-cell"><input type="text" className="form-control" id="lastname"  style={{background:"transparent", border:"none"}} value={lp} onChange={(e)=>setLP(e.target.value)}/></td>
              <td className="u-border-5 u-border-white ">
              <select className="form-control" 
               value={cp} onChange={(e)=>setCP(e.target.value)}>  
              <option >انقر هنا </option>
                <option value="h">ذكر </option>
                <option value="f">ذكر </option>
                
              </select>
           
              </td>
              <td className="u-border-5 u-border-white u-palette-3-light-3 u-table-cell u-table-cell-24">
              
        < button onClick={()=>dispatch(addPupil(classe._id,{firstname:fp,lastname:lp,civility:cp,classId:classe._id}))}>اضافة</button>
        
           
              </td>
            </tr>
          </tbody>
         

       
                </table>
              </div>
            </div>
          </section>
</div>}
        </>
      )
}
export default AddPupils