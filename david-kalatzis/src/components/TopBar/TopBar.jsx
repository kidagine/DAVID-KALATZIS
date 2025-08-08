import "./TopBar.css";
import { useState } from "react";
import EmailIcon from "../../assets/svgs/Email.svg?react";
import ArrowUpRightIcon from "../../assets/svgs/ArrowUpRight.svg?react";

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
              Professional
            </button>
            <button
              onClick={() => setSelectedValue(1)}
              className={`top-bar-selector-button ${
                selectedValue === 1 ? "m--active" : ""
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setSelectedValue(2)}
              className={`top-bar-selector-button ${
                selectedValue === 2 ? "m--active" : ""
              }`}
            >
              About
            </button>
          </div>
        </div>
        <div className="top-bar-buttons-container">
          <div className={"top-bar-button-shadow"}>
            <a
              href="mailto:davidkalatzis@gmail.com"
              className="top-bar-button top-bar-button-left"
            >
              Email Me!
              <EmailIcon className="top-bar-button-icon" />
            </a>
          </div>
          <div className={"top-bar-button-shadow"}>
            <a className="top-bar-button top-bar-button-right">
              CV
              <ArrowUpRightIcon className="top-bar-button-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
