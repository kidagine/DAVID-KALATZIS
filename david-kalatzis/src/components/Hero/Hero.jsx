import "./Hero.css";
import GithubIcon from "../../assets/svgs/Github.svg?react";
import LinkedinIcon from "../../assets/svgs/Linkedin.svg?react";
import ProfileImage from "../../assets/images/Profile.jpg";

function Hero() {
  return (
    <div className="hero">
      <img src={ProfileImage} className="hero-picture" />
      <div className="hero-info-container">
        <div className="hero-name">David Kalatzis</div>
        <div className="hero-description-container">
          <div className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in.
          </div>
          <div className="hero-icons-containers">
            <a
              className="hero-icon-container"
              target="_blank"
              href="https://github.com/kidagine"
            >
              <GithubIcon className="hero-icon" />
            </a>
            <a
              className="hero-icon-container"
              target="_blank"
              href="https://www.linkedin.com/in/davidkalatzis/"
            >
              <LinkedinIcon className="hero-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
