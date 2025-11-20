// src/components/OEMPartners/OEMPartners.jsx
import React from "react";
import "./OEMPartners.css";

export default function OEMPartners({ images = [], title = "OUR PARTNERS", speed = 18 }) {

  // images array ko duplicate karte hain infinite loop ke liye
  const looped = images.concat(images);

  return (
    <div className="train-slider-container">
     <h2 className="train-title stylish-heading">
  <span>{title}</span>
</h2>

      <div 
        className="train-track" 
        style={{ animationDuration: `${speed}s` }}   // <- SPEED CONTROL
      >
        {looped.map((src, idx) => (
          <div key={idx} className="train-box">
            <img src={src} alt={`partner-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
