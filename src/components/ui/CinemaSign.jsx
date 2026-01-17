import React from "react";
import "./CinemaSign.css";

export default function CinemaSign() {
  const bulbCount = 32;

  return (
    <div className="cinema-wrapper">
      <div className="cinema-sign">
        <div className="cinema-top">
          <span className="cinema-title">Cinema </span>
        </div>

        <div className="cinema-now-showing">
          <span>YOUR AI MOVIE ASSISTANT</span>
        </div>

        <div className="cinema-board">
          <div className="cinema-line" />
          <div className="cinema-line" />
          <div className="cinema-line" />
          <div className="cinema-line" />
        </div>

        {/* Light bulbs */}
        <div className="cinema-lights">
          {Array.from({ length: bulbCount }).map((_, i) => (
            <span key={i} className="cinema-bulb" />
          ))}
        </div>
      </div>
    </div>
  );
}
