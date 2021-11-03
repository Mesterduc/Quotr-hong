// import { useEffect, useState } from "react";
import Navbar from "./Components/navBar/Navbar";
import Router from "./Router/router"
import './styles.css'
// const API_URL = process.env.REACT_APP_API;


function App() {

  return (
    <main>
      <Navbar />
      <Router />
    </main>
    
  );
}

export default App;
