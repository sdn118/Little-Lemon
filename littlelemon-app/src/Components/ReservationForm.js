import { useState } from "react";

function ReservationForm(props){

const [fName, setFName] = useState("")
const [lName, setLName] = useState("")
const [email, setEmail] = useState("")
const [date, setDate] = useState("");
const [guest, setGuest] = useState("");
const [occasion, setOccasion] = useState("");
const [error, setError] = useState("");

const [selectedTime, setSelectedTime] = useState(
  props.availableTimes.map((times) => <option>{times}</option>)
)

function handleDateChange(e) {
  setDate(e.target.value);

  var stringify = e.target.value;
  const date = new Date(stringify);

  props.updateTimes(date);

  setSelectedTime(props.availableTimes.map((times) => <option>{times}</option>));
}


const validateForm = () => {
  let error = ""

  if (fName === "") {
    error.fName = "First Name required."
  }
  

  if (lName === "") {
    error.lName = "Last Name required."
  }

  if (email === "") {
    error.email = "Email required."
  } else if (email === "/^+([-]?+)*@+([-]?+)*({2,3})+$/") {
    error.email = "Email invalid"
  } else {
    console.log("success")
  }


  if (date === "") {
    error.date= "Date required."
  }

  if (guest === "") {
    error.guest = "Please select number of guest."
  }

  setError("...error")
  return Object.keys(error).length <1;

}




const handleSubmit = (event) => {
  event.preventDefault();
  console.table(props)

  let isValid = validateForm()
  if(isValid) {
      alert("Submitted")
  }
}

  return(
  <>
    <h1 className="main">Book a Table!</h1>
    <div className="reserve-wrapper">
      <form
      id="reservation-form"
      className="reservation"
      onSubmit={handleSubmit}>

        <label htmlFor="fName">First Name</label>
        <input type="text"
        id="fName"
        name="fName"
        required value={fName}
        placeholder="First Name"
        onChange={(e) => setFName(e.target.value)}
        />
        <span className="non-valid">{error.fName}</span>


        <label htmlFor="lName">Last Name</label>
        <input type="text"
        id="lName"
        name="lName"
        required value={lName}
        placeholder="Last Name"
        onChange={(e) => setLName(e.target.value)}
        />
        <span className="non-valid">{error.lName}</span>


        <label htmlFor="email">Email</label>
        <input type="email"
        id="email"
        name="email"
        required value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        />
        <span className="non-valid">{error.email}</span>

          <label htmlFor="date">Choose a Date</label>

          <input
          type="date"
          id="date"
          name="date"
          required value={date}
          onChange={handleDateChange}
          />
          <span className="non-valid">{error.date}</span>

          <label htmlFor="time">Choose a Time</label>
          <select id="time" required>
            {selectedTime}
          </select>

          <label htmlFor="guest">Number of Guests</label>

          <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          name="guest"
          id="guest"
          required value={guest}
          onChange={(e) => setGuest(e.target.value)}
          />
          <span className="non-valid">{error.guest}</span>


          
        <div className="dropdown">
        <label htmlFor="occasion">Occassion</label>
        <select
          className="dropdowncnt"
          required value={occasion}
          onChange={(e) => setOccasion(e.target.value)} >
            <option value="none">None</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
          </select>
        </div>




        <div>
          <input type="submit" id="submit" name="submit"/>
        </div>

      </form>
    </div>
  </>

  );

  }
export default ReservationForm;