import {Link} from "react-router-dom";
import Logo from "./assets/Logo.svg"
import shrimpsalad from "./assets/shrimpsalad.jpg"

function Headtwo(){

  return(
      <nav>
      <img src={Logo} alt="little lemon logo" className="img1"/>
      <ul className="container">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">Login</Link></li>
      </ul>
      <img src={shrimpsalad} alt="shrimpsalad" className="img3"></img>
      </nav>
  );
}

export default Headtwo;