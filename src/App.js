import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./pages/Home/Home.js";
import Shops from "./pages/Shops/Shops.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Marketplace from "./pages/Marketplace/Marketplace.js";
import "./App.css"
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/shops" element = {<Shops/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/marketplace" element = {<Marketplace/>}/>
      </Routes>
    </>
  )
}
export default App;