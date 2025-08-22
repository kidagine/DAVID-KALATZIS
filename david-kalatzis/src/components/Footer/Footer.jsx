import "./Footer.css";
import KidaImage from "../../assets/images/Face.png";
import ArrowUpIcon from "../../assets/svgs/ArrowUp.svg?react";
import { footerData } from "../../data/FooterData";

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
          <div className="footer-text">{footerData.rights}</div>
          <div className="footer-text">
            {footerData.business}
            <a className="footer-link" href="mailto:davidkalatzis@gmail.com">
              {footerData.email}
            </a>
          </div>
        </div>
        <div className="footer-up-nav-container">
          <img src={KidaImage} className="footer-picture" />
          <div className="footer-text">Thnx for stopping by!</div>
        </div>
        <button className="footer-up-nav" onClick={scrollToTop}>
          <ArrowUpIcon className="footer-up-icon" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
