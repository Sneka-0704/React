import "../css/NavBar.css"
import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
        <ol>
            <li><Link to={"Experience/"}>Experience</Link></li>
            <li><Link to={"About/"}>About</Link></li>
            <li><Link to={"Login/"}>Login In</Link></li>
            <li><Link to={"useRef/"}>useRef</Link></li>
            <li><Link to={"Memo/"}>Memo</Link></li>
            <li><Link to={"Callback/"}>Callback</Link></li>
        </ol>
        

    )
}
export default NavBar;