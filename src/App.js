import React from "react";

import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      <Hero />
      <Header />
      <HowItWorks/>
      <Footer/>
    </div>
  );
}

export default App;
