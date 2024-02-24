// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import EntertainmentPage from "./components/pages/EntertainmentPage";
import Home from "./components/pages/Home";
import CulturePage from "./components/pages/CulturePage";
import ArtPage from "./components/pages/ArtPage";
import PlaceDetail from "./components/pages/PlaceDetail";
import { Shopping } from "./components/EntertainmentDetail/Shopping";
import { FlavorStops } from "./components/EntertainmentDetail/FlavorStops";
import { Uludag } from "./components/EntertainmentDetail/Uludag";
import { Sea } from "./components/EntertainmentDetail/Sea";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eglence" element={<EntertainmentPage />} />
        <Route path="/kultur" element={<CulturePage />} />
        <Route path="/sanat" element={<ArtPage />} />
        <Route path="/placedetail/:gmlId" element={<PlaceDetail />} />
        <Route path="/alisveris" element={<Shopping />} />
        <Route path="/lezzet-duraklari" element={<FlavorStops />} />
        <Route path="/uludag" element={<Uludag />} />
        <Route path="/deniz" element={<Sea />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
