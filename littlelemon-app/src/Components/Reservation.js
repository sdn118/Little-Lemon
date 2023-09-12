import ReservationForm from "./ReservationForm";
import { useReducer } from "react";
import {fetchAPI} from "../API/Api";
import Footer from "./Footer";
import Headtwo from "../ReservationHead";


function Reservationpage() {

function updateTimes(date){
  return fetchAPI(date);
}

const output = fetchAPI(new Date());

const [availableTimes, dispatch] = useReducer(updateTimes, output);



  return(
    <>
    <Headtwo />
    <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    <Footer />
    </>
  );

}
export default Reservationpage;