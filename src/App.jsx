import { useState } from "react";
import Homepage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
