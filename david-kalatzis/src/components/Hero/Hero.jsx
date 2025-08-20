import "./Hero.css";
import GithubIcon from "../../assets/svgs/Github.svg?react";
import LinkedinIcon from "../../assets/svgs/Linkedin.svg?react";
import ProfileImage from "../../assets/images/Profile.jpg";
import EmailIcon from "../../assets/svgs/Email.svg?react";
import ArrowUpRightIcon from "../../assets/svgs/ArrowUpRight.svg?react";
import { heroData } from "../../data/HeroData";
import { topBarData } from "../../data/TopBarData";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-picture-container">
        <img src={ProfileImage} className="hero-picture" />
      </div>

      <div className="hero-info-container">
        <div className="hero-name-container">
          <div className="hero-name">{heroData.name}</div>
          <div className="hero-buttons-container">
            <div className={"hero-button-shadow"}>
              <a
                href="mailto:davidkalatzis@gmail.com"
                className="hero-button hero-button-left"
              >
                <EmailIcon className="hero-button-icon" />
              </a>
            </div>
            <div className={"hero-button-shadow"}>
              <a className="hero-button hero-button-right">{topBarData.cv}</a>
            </div>
          </div>
        </div>
        <div className="hero-description-container">
          <div className="hero-description">{heroData.description}</div>
          <div className="hero-icons-containers">
            <a
              className="hero-icon-container"
              target="_blank"
              href={heroData.github}
            >
              <GithubIcon className="hero-icon" />
            </a>
            <a
              className="hero-icon-container"
              target="_blank"
              href={heroData.linkedin}
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
