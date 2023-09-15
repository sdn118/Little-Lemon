import Check from "./../assets/Check.png"
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function ConfirmedReservation() {

  const navigate = useNavigate();

  return(

    <>
    <Nav />
    <section className="confirmation">
      <h2>Your table has been reserved!</h2>
      <p>You will receive a confirmation email with the time and date. If you need to change this reservation please contact the restaurant at (999) 999-9999.</p>
      <img src={Check} alt="green checkmark" className="img4" />
    </section>

    <br />
    <button className="return" onClick={() => navigate ("/")}>Return Home</button>
    <Footer />
  </>
  )
}

export default ConfirmedReservation;