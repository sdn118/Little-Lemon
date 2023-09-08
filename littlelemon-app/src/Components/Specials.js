import greeksalad from "./../assets/greeksalad.jpg"
import bruchetta from "./../assets/bruchetta.svg"
import lemondessert from "./../assets/lemondessert.jpg"

function Specials(){
  return(
  <main>
    <h2>This Weeks Specials!</h2>
      <button className="but2"><strong>Online Menu</strong></button>

      <section id="specials">
        <div className="box-one">
          <img src= {greeksalad} alt="salad" className="card-img-1" />
          <div className="card-body">
            <h3>Greek Salad</h3>
            <p> This famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with cruncy garlic and rosemary croutons. </p>
          </div>
        </div>

        <div className="box-one">
          <img src= {bruchetta} alt="bread" className="card-img-2" />
          <div className="card-body">
            <h3>Bruchetta</h3>
            <p> Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
          </div>

        </div>


        <div className="box-one">
          <img src= {lemondessert} alt="dessert" className="card-img-3" />
          <div className="card-body">
            <h3>Lemon Dessert</h3>
            <p> This comes straight from grandmas recipe book. Every last ingredient has been sourced and is as authentic as can be imagened </p>
          </div>

        </div>

      </section>
  </main>
  );
}

export default Specials