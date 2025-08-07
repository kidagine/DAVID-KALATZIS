import "./Footer.css";
import ArrowUpIcon from "../../assets/svgs/ArrowUp.svg?react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-info-container">
          <div className="footer-text">
            ©2025 David Kalatzis. All Rights Reserved
          </div>
          <div className="footer-text">
            Connection for Business:{" "}
            <a className="footer-link" href="mailto:davidkalatzis@gmail.com">
              davidkalatzis@gmail.com
            </a>
          </div>
        </div>
        <div className="footer-up-nav-container">
          <button className="footer-up-nav" onClick={scrollToTop}>
            <ArrowUpIcon className="footer-up-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
