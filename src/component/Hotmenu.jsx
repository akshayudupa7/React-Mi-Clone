import {Link} from "react-router-dom";
import "../css/Hot.css"

function Hotmenu(){
    return(
        <div className="navmenu">
         <Link className="menu-item" to="/music">Music</Link>
         <Link className="menu-item" to="/smartDevice">SmartDevice</Link>
         <Link className="menu-item" to="/home">Home</Link>
         <Link className="menu-item" to="/lifeStyle">LifeStyle</Link>
         <Link className="menu-item" to="/MobileAccessories">MobileAccessories</Link>
         </div>
    )
}
export default Hotmenu