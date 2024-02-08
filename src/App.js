import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const useFavicon = (href) => {
    useEffect(() => {
      const link = document.createElement('link');
      const existingLink = document.querySelector('link[rel="shortcut icon"]') || document.querySelector('link[rel="icon"]');
      
      if (existingLink) {
        existingLink.href = href;
      } else {
        link.rel = 'icon';
        link.href = href;
        document.head.appendChild(link);
      }
  
      return () => {
        if (existingLink) {
          document.head.removeChild(link);
        }
      };
    }, [href]);
  };

  useEffect(() => {
    document.title = "Welcome to Doyup's Portfolio!";
  }, []);

  useFavicon('./img/logo.png');

  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
