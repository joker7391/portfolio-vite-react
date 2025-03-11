import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
