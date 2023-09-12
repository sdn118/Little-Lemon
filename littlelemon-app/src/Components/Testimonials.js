import starrating from "./../assets/starrating.png";
import profile1 from "./../assets/profile1.jpg";
import profile2 from "./../assets/profile2.jpg";
import profile3 from "./../assets/profile3.jpg";
import profile4 from "./../assets/profile4.jpg";


function Testimonials (){

  return(
  <section id="test">
    <h2 className="title">Testimonials</h2>

    <div className="review-container">

      <div className="review">
        <img src= {starrating} alt="review-rating" id="star" />
        <img src= {profile1} alt="reviewer" id="profile" />

        <h2>Gregory C.</h2>
        <p className="one">"The bruchetta was phenomenal!"</p>

      </div>

      <div className="review">
        <img src= {starrating} alt="review-rating" id="star" />
        <img src= {profile2} alt="reviewer" id="profile" />

        <h2>Alicia S.</h2>
        <p className="two">"Such good vibes here love it!"</p>
      </div>

      <div className="review">
        <img src= {starrating} alt="review-rating" id="star" />
        <img src= {profile3} alt="reviewer" id="profile" />

        <h2>Martha G.</h2>
        <p className="three">"Good food and a peaceful atmospher that reminds me of home!"</p>
      </div>

      <div className="review">
        <img src= {starrating} alt="review-rating" id="star" />
        <img src= {profile4} alt="reviewer" id="profile" />

        <h2>Hersh J.</h2>
        <p className="four">"The greek salad is the best!"</p>
      </div>

    </div>
  </section>
  );
}

export default Testimonials;