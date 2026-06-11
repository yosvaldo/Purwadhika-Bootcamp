import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => <h2>Dashboard Home</h2>;
const About = () => <h2>Info Page</h2>;

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}