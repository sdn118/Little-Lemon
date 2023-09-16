import { useState, useEffect } from "react";

const occasions = [
  {id:"1", name: "None"},
  {id:"2", name: "Birthday"},
  {id:"3", name: "Engagement"},
  {id:"4", name: "Anniversary"}
];

function Reservationpage (props) {

  const [inputFields, setInputFields] = useState({
    fname:"",
    email:"",
    phone:"",
    guest:"",
    occasion: ""
  });

  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [date, setDate] = useState({});
  const [occasion, setOccasion] = useState([]);

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

  const validateValues = (inputFields) => {
    let errors = {};
    if (inputFields.fname.length === "") {
      errors.fname = "Please enter Full Name";
    }
    if (inputFields.email.length < 5){
      errors.email = "Email is required"
    } else if (inputFields.email === "/^([-]?)*@([-]?)*({2,3})+$/"){
      errors.email = "Email is invalid"
    }
    if (inputFields.phone.length === "") {
      errors.phone = "Phone Number required"
    }else if (inputFields.phone.length <= 9){
      errors.phone = "Phone number too short"
    } else if (inputFields.phone.length >= 15){
      errors.phone = "Phone number too long"
    } else if (inputFields.phone === "/^([-]?)*@([-]?)*({2,3})+$/")
      errors.phone = "Phone number invalid"
    if (date === ""){
      errors.date = "Please select a date"
    }
    if (selectedTime === ""){
      errors.selectedTime = "Please select a time"
    }
    if (inputFields.guest === ""){
      errors.guest = "Please select a number of guest"
    }
    if (inputFields.occasion === ""){
      errors.occasion = "Occasion not selected"
    }

    return errors;
  };

  const handleChange = (e) => {
    setInputFields({...inputFields, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmit(true);
  }

  const finishSubmit = () => {
    console.log(inputFields);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      finishSubmit();
    }
  });

  useEffect(() =>{
    setOccasion(occasions)
  }, []);



return(
<div>
  <form id="reservationForm"
   onSubmit={handleSubmit}
   className="reservation">
    <label htmlFor="fname">Full Name</label>
    <input type="text"
        id="fname"
       name="fname"
       placeholder="Full Name"
       required
       value={inputFields.fname}
       onChange={handleChange}/>
       <span className="non-valid">{errors.fname}</span>

    <label htmlFor="email">Email</label>
    <input  type="text"
        id="email"
        name="email"
        placeholder="Email"
        required
        value={inputFields.email}
        onChange={handleChange}/>
        <span className="non-valid">{errors.email}</span>

    <label htmlFor="phone">Phone</label>
    <input type="text"
        id="phone"
        name="phone"
        placeholder="Phone Number"
        required
        value={inputFields.phone}
        onChange={handleChange}/>
        <span className="non-valid">{errors.phone}</span>

    <label htmlFor="date">Choose a Date</label>
    <input type="date"
        id="date"
        name="date"
        required={date}
        onChange={handleDateChange}/>
        <span className="non-valid">{errors.date}</span>

    <label htmlFor="time">Choose a Time</label>
    <select type="time"
        id="time"
        name="time"
        required
        value={selectedTime}
        onChange={handleChange}>{selectedTime}
        </select>
        <span className="non-valid">{errors.selectedTime}</span>

    <label htmlFor="guest">Guest</label>
    <input type="number"
        id="guest"
        name="guest"
        min= "1"
        max="10"
        placeholder="1"
        value={inputFields.guest}
        onChange={handleChange}/>
        <span className="non-valid">{errors.guest}</span>

      <label htmlFor="occasion">Occasion</label>
      <select type="occasion"
        id="occasion"
        name="occasion"
        required
        value={inputFields.occasion}
        onChange={handleChange}>
        <option value="0" type="option">Select Occasion</option>
          {
            occasion &&
            occasion !== undefined ?
            occasion.map((ocs, index) => {
              return(
                <option key={index} value={ocs.id}>{ocs.name}</option>
              )
            })
            : "Occassion not selected"
          }
        </select>

    <input type="submit" name="submit" id="submit" />
  </form>
</div>

);
}

export default Reservationpage