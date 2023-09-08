import Header from "./Header"
import ReservationForm from "./ReservationForm";
import { useReducer } from "react";
import {fetchAPI} from "../API/Api";

function Reservationpage() {

function updateTimes(date){
  return fetchAPI(date);
}

const output = fetchAPI(new Date());

const [availableTimes, dispatch] = useReducer(updateTimes, output);



  return(
    <>
    <Header />
    <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );

}
export default Reservationpage;