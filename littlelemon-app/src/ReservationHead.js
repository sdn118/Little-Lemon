import Logo from "./../assets/Logo.svg"
import shrimpsalad from "./../assets/shrimpsalad.jpg"

function Headtwo(){

  return(
    <header>
      <img src={shrimpsalad} alt="shrimpsalad" class="img2"></img>
      <nav>
      <img src={Logo} alt="little lemon logo" class="img1"/>
      <ul class="container">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Reservation">Reservation</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Login">Login</a></li>
      </ul>

      </nav>
    </header>
  );
}

export default Headtwo;