// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import drlogo from "/drcliniclogo.png";
import Footer from "./components/footer"; // Correct relative path

// Import the Login Page Components
import DoctorLogin from "./pages/DoctorLogin";
import ReceptionistLogin from "./pages/ReceptionistLogin";
import PharmaLogin from "./pages/PharmaLogin";
import Home from "./pages/Home";

function App() {
  const handleNavigate = (path) => {
    window.location.href = path; // Change to `useNavigate` if using React Router
  };

  return (
    <Router>
      {" "}
      {/* Wrap the app in Router */}
      
      {/* Define Routes here */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/receptionist-login" element={<ReceptionistLogin />} />
        <Route path="/pharma-login" element={<PharmaLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
