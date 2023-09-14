import Check from "./../assets/Check.png"


function ConfirmedReservation() {

  return(

    <main>
    <section className="confirmation">
      <h2>Your table has been reserved!</h2>
      <p>You will receive a confirmation email with the time and date. If you need to change this reservation please contact the restaurant at (999) 999-9999.</p>
    </section>
    <img src="icons_assets/Check.png" className="img4" />
    <br />
    <button className="return">Return Home</button>
  </main>
  )
}

export default ConfirmedReservation;