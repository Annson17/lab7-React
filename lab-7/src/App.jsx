import React, { useState } from "react";
import "./index.css";
import andrewNgImage from "./andrew_ng.jpg"; // Make sure this image exists

const App = () => {
  const name = "Andrew Ng";
  const bio = "AI leader, co-founder of Coursera, and Stanford professor.";
  const initialBgColor = "linear-gradient(135deg, #00BFFF, #6A5ACD)";

  const [bgColor, setBgColor] = useState(initialBgColor);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setBgColor("linear-gradient(135deg, #FFD700, #FFA07A)"); // Gold to Light Coral
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setBgColor(initialBgColor);
  };

  return (
    <div className="app-container">
      <div
        className={`profile-card ${hovered ? "hovered" : ""}`}
        style={{
          background: bgColor,
          color: hovered ? "#000000" : "#ffffff",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={andrewNgImage} alt={name} className="profile-pic" />
        <h2 className="profile-name">{name}</h2>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
};

export default App;
