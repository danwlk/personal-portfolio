import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  useEffect(() => {
    document.title = "Welcome to Doyup's Portfolio!";
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
