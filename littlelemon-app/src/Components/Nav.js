import {Link} from "react-router-dom";
import Logo from "./../assets/Logo.svg"

function Nav(){

  return(
    <nav>
      <img src= {Logo} alt="little lemon logo" className="img1"></img>
        <ul className="container">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
    </nav>
  );
};

export default Nav;