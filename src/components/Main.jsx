import React from "react";
import { Hero } from "./context/Hero";
import "../style/Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <video
        style={{
          height: "60%",
          width: "100%",
          position: "absolute",
          bottom: "0",
          top: "0",
          mixBlendMode: "overlay",
          opacity: ".10",
          backgroundColor: "black",
        }}
        autoPlay
        muted
        loop
        className="fullscreen-video"
        src="/assets/bursa-video.mp4"
      ></video>

      <Hero />
    </div>
  );
};

export default Main;
