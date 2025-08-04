import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner-container">
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
    </div>
  );
}

export default Footer;
