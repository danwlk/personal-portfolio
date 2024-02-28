import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Connect from "./components/Connect/Connect";

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
    </div>
  );
}

export default App;
