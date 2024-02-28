import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  useEffect(() => {
    document.title = "Doyup Kim";
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
