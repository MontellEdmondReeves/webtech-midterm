import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Event from "./Event";
import Featured from "./Featured";
import Contact from "./Contact";
import './App.css';

function App(){
  const [currentPage, setCurrentPage] = useState("home");

  const pages = {
    about: <About />,
    services: <Services />,
    events: <Event />,
    featured: <Featured />,
    contact: <Contact />,
  };

  return (
    <>
      <Header onNavigate={setCurrentPage} />
      <main>
        {currentPage === "home" ? <h2>Welcome to Bright Future Library</h2> : pages[currentPage]}
      </main>
    </>
  );
}
export default App;