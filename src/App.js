import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/SkillsSphere";

function App() {

  useEffect(() => {
    document.title = "Welcome to Doyup's Portfolio!";
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
