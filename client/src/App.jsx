// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DiabetesPage from "./DiabetesPage";
import HypertensionPage from "./HypertensionPage";
import CardiovascularPage from "./CardiovascularPage";
import CartPage from "./CartPage"; // <-- ADD THIS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diabetes" element={<DiabetesPage />} />
        <Route path="/hypertension" element={<HypertensionPage />} />
        <Route path="/cardiovascular" element={<CardiovascularPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* <-- ADD THIS */}
      </Routes>
    </Router>
  );
}

export default App;
