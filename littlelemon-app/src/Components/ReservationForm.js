import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const occasions=[
  {id:"1", name:"None"},
  {id:"2", name:"Birthday"},
  {id:"3", name:"Engagement"},
  {id:"4", name:"Anniversary"},
]

function Reservationpage (props) {

  const [inputFields, setInputFields] = useState({
    fname:"",
    email:"",
    phone:"",
    date: "",
    time: "",
    guest:"",
    occasion: ""
  });

  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [date, setDate] = useState({});

  const [occasions, setOccasions] = useState({});

  const [selectedTime, setSelectedTime] = useState(
    props.availableTimes.map((time) => <option>{time}</option>)
  )

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setSelectedTime(props.availableTimes.map((time) => <option>{time}</option>));
  }

  const validateValues = (inputFields) => {
    let errors = {};
    if (inputFields.fname.length < 25) {
      errors.fname = "Full name too short.";
    }
    if (inputFields.email.length < 5){
      errors.email = "Email is required"
    }
    if (inputFields.phone.length <= 9){
      errors.phone = "Phone number too short"
    } else if (inputFields.phone.length >= 11){
      errors.phone = "Phone number too long"
    }
    if (inputFields.date = {}){
      errors.date = "Please select a date"
    }
    if (inputFields.time = {}){
      errors.time = "Please select a time"
    }
    if (inputFields.guest = {}){
      errors.guest = "Please select a number of guest"
    }
    if (inputFields.occasion = {}){
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
    if (Object.keys(errors).length ===0 && submit) {
      finishSubmit();
    }
  }, [errors]);

  useEffect(()=>{
    setOccasions(occasions);
  }, []);


return(
<div>
  <form onSubmit={handleSubmit}>
    <label htmlFor="fname">Full Name</label>
    <input type="text"
        id="fname"
       name="fname"
       placeholder="Full Name"
       value={inputFields.fname}
       onChange={handleChange}/>
       <span className="non-valid">{errors.fName}</span>

    <label htmlFor="email">Email</label>
    <input  type="text"
        id="email"
        name="email"
        placeholder="Email"
        value={inputFields.email}
        onChange={handleChange}/>
        <span className="non-valid">{errors.email}</span>

    <label htmlFor="phone">Phone</label>
    <input type="text"
        id="phone"
        name="phone"
        placeholder="Phone Number"
        value={inputFields.phone}
        onChange={handleChange}/>
        <span className="non-valid">{errors.phone}</span>

    <label htmlFor="date">date</label>
    <input type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateChange}/>
        <span className="non-valid">{errors.date}</span>

    <label htmlFor="time">Time</label>
    <input type="time"
        id="time"
        name="time"
        value={selectedTime}
        onChange={handleChange}/>
        <span className="non-valid">{errors.time}</span>

    <label htmlFor="guest">Guest</label>
    <input type="number"
        id="guest"
        name="guest"
        placeholder="1"
        value={inputFields.guest}
        onChange={handleChange}/>
        <span className="non-valid">{errors.guest}</span>

      <label htmlFor="occasion">Occasion</label>
      <select type="button"
        id="occasion"
        name="occasion"
        value={inputFields.occasion}
        onChange={handleChange}>
        <option value="0">Select Occasion</option>
          {occasions &&
            occasions !== undefined ?
            occasions.map((ocs, index) => {
            return (
              <option key={index} value={ocs.id}>{ocs.name}</option>
            )
          })
          : "Occasion not selected"
        }
        </select>

    <input type="submit" name="submit" id="submit"/>
  </form>
</div>

);
}

export default Reservationpage