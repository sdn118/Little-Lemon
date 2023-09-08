import restauranfood from "./../assets/restauranfood.jpg";
import {Link} from "react-router-dom"

function Header(){

  return(
    <header id="hero">
    <div className="main-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
        
        <Link to="/reservations">
        <button className="but1"> <strong>Reserve a Table</strong></button>
        </Link>
      </div>
      <img src={restauranfood} alt="food" className="img2"></img>
    </header>
  );
};

export default Header;