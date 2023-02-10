import React from 'react';
import './App.css';
import {LandingPage} from "./components/LandingPage";
import Navbar from "./components/NavBar";
import {Route, Routes} from "react-router";
import {Sprints} from "./components/Pages/Sprints/Sprints";
import {Tickets} from "./components/Pages/Tickets/Tickets";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/sprints" element={<Sprints/>} />
            <Route path="/tickets" element={<Tickets />} />
        </Routes>
    </div>
  );
}

export default App;
