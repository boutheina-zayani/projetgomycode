import './notf.css'
import {useHistory} from "react-router-dom"
function NotFound(){
  const history=useHistory()
    return (

        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>404</h1>
            </div>
            <h2>الصفحة غير موجودة!</h2>
         
            <button className="notf" onClick={()=>history.goBack()}> عد الى الصفحة السابقة </button>
          </div>
        </div>
      )
}
export default NotFound