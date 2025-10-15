import React from "react";
import Ongs from "./components/Ongs/Ongs.jsx";
import Casos from "./components/CasosEnergia/Casos.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css"; 

export default function App() {
  return (
    <div>
      <Menu />
      <Banner />
      <h2 className="energyTitle">Casos de Energia Renovável</h2>
      <Casos />
     <h2 className="ongsTitle">ONGs de Energia Renovável</h2>
      <Ongs />
      <Footer/>
    </div>
  );
}