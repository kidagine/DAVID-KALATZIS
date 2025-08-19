import "./Hero.css";
import GithubIcon from "../../assets/svgs/Github.svg?react";
import LinkedinIcon from "../../assets/svgs/Linkedin.svg?react";
import ProfileImage from "../../assets/images/Profile.jpg";
import { heroData } from "../../data/HeroData";

function Hero() {
  return (
    <div className="hero">
      <img src={ProfileImage} className="hero-picture" />
      <div className="hero-info-container">
        <div className="hero-name">{heroData.name}</div>
        <div className="hero-description-container">
          <div className="hero-description">{heroData.description}</div>
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
