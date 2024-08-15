import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailGalery from "./pages/DetailGalery";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Backend from "./pages/project/Backend";
import Frontend from "./pages/project/Frontend";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galery" element={<DetailGalery />} />
        <Route path="/project/frontend" element={<Frontend />} />
        <Route path="/project/backend" element={<Backend />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
