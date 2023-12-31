import {Link} from "react-router-dom";
import Logo from "./../assets/Logo.svg"

function Footer(){

  return(
    <footer>

  <div id="bottom">
    <img src= {Logo} alt="little lemon logo" className="logo"></img>


    <ul className="container_2">
      <h4>Navigation</h4>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Reservation">Reservation</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      <li><Link to="/Login">Login</Link></li>
    </ul>


    <ul className="container_3">
      <h4>Contact Us!</h4>
      <li><Link to="#Phone">Phone</Link></li>
      <li><a href="#Email">Email</a></li>
      <li><a href="#Address">Address</a></li>
    </ul>

    <ul className="container_4">
          <h4>Social Media</h4>
          <li><Link to="#">Instagram</Link></li>
          <li><Link to="#">Twitter</Link></li>
          <li><Link to="#">Pinterest</Link></li>
        </ul>

    </div>
    </footer>
  );
}

export default Footer;