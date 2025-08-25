import "./TopBar.css";
import EmailIcon from "../../assets/svgs/Email.svg?react";
import ArrowUpRightIcon from "../../assets/svgs/ArrowUpRight.svg?react";
import HouseIcon from "../../assets/svgs/House.svg?react";
import { topBarData } from "../../data/TopBarData";
import { useState, useEffect } from "react";

function TopBar({ isSticky, selectedValue, setSelectedValue }) {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 720);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 250,
      behavior: "smooth",
    });
  };

  return (
    <div className={"top-bar-stuck"}>
      <div className={`top-bar ${isSticky ? "is-sticky" : ""}`}>
        <div className={`top-bar-inner-container`}>
          {!isMobileView && (
            <div className="top-bar-item">
              {/* <div className="top-bar-home-container">
                <HouseIcon className="top-bar-home-icon" />
              </div> */}
            </div>
          )}

          <div className="top-bar-item">
            <div className="top-bar-selector-group">
              <div className="top-bar-selector-wrapper">
                <div
                  className="top-bar-selector-indicator"
                  style={{ transform: `translateX(${selectedValue * 100}%)` }}
                />
                {topBarData.items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      scrollToTop();
                      setSelectedValue(item.value);
                    }}
                    className={`top-bar-selector-button ${
                      selectedValue === item.value ? "m--active" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {!isMobileView && (
            <div className="top-bar-item">
              <div className="top-bar-buttons-container">
                <div className={"top-bar-button-shadow"}>
                  <a
                    href="mailto:davidkalatzis@gmail.com"
                    className="top-bar-button top-bar-button-left"
                  >
                    {/* {topBarData.contact} */}
                    <EmailIcon className="top-bar-button-icon" />
                  </a>
                </div>
                <div className={"top-bar-button-shadow"}>
                  <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1_o9YiMt5UYPE9ubD9THiW3or6f3LpHHuBQJDC96R96g/edit?usp=sharing"
                    className="top-bar-button top-bar-button-right"
                  >
                    {topBarData.cv}
                    {/* <ArrowUpRightIcon className="top-bar-button-icon" /> */}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
