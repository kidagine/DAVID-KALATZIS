import "./TopBar.css";
import { useState } from "react";

function TopBar({ isSticky }) {
  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <div className={`top-bar ${isSticky ? "is-sticky" : ""}`}>
      <div className={`top-bar-inner-container ${isSticky ? "is-sticky" : ""}`}>
        <div className="top-bar-icon">icon</div>
        <div className="top-bar-selector-group">
          <div className="top-bar-selector-wrapper">
            <div
              className="top-bar-selector-indicator"
              style={{ transform: `translateX(${selectedValue * 100}%)` }}
            />
            <button
              onClick={() => setSelectedValue(0)}
              className={`top-bar-selector-button ${
                selectedValue === 0 ? "m--active" : ""
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setSelectedValue(1)}
              className={`top-bar-selector-button ${
                selectedValue === 1 ? "m--active" : ""
              }`}
            >
              Professional
            </button>
          </div>
        </div>
        <div className="top-bar-buttons-container">
          <button className="top-bar-button top-bar-button-left">
            Contact
          </button>
          <button className="top-bar-button top-bar-button-right">CV</button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
