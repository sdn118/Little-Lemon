import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Reservationpage from "./Components/Reservation";
import ConfirmedReservation from "./Components/ConfirmedReservation";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/reservation" element={<Reservationpage />} />
      <Route path="/ConfirmedReservation" element={<ConfirmedReservation />} />
    </Routes>
    </>
  );
}

export default App;
