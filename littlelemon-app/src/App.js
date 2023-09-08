import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav"
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer"
import Reservationpage from "./Components/Reservation";

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/reservation" element={<Reservationpage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
