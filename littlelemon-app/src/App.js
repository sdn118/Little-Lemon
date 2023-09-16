import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Reservationpage from "./Components/Reservation";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/reservation" element={<Reservationpage />} />
    </Routes>
    </>
  );
}

export default App;
