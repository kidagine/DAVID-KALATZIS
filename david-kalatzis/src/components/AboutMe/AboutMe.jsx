import "./AboutMe.css";
import GithubIcon from "../../assets/svgs/Github.svg?react";
import LinkedinIcon from "../../assets/svgs/Linkedin.svg?react";

function AboutMe() {
  return (
    <div className="about-me">
      <image className="about-me-picture">picture</image>
      <div className="about-me-info-container">
        <div className="about-me-name">David Kalatzis</div>
        <div className="about-me-description-container">
          <div className="about-me-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in.
          </div>
          <div className="about-me-icons-containers">
            <a
              className="about-me-icon-container"
              target="_blank"
              href="https://github.com/kidagine"
            >
              <GithubIcon className="about-me-icon" />
            </a>
            <a
              className="about-me-icon-container"
              target="_blank"
              href="https://www.linkedin.com/in/davidkalatzis/"
            >
              <LinkedinIcon className="about-me-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
