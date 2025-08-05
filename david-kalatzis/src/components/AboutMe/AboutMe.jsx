import "./AboutMe.css";
import { ReactComponent as GitHubIcon } from "../../assets/svgs/GitHub.svg?component";

function AboutMe() {
  return (
    <div className="about-me">
      <image className="about-me-picture">picture</image>
      <div className="about-me-info-container">
        <div className="about-me-name">David Kalatzis</div>
        <div className="about-me-description-container">
          <div className="about-me-description">
            Unity developer with a degree and a wealth of work experience.
            Focused on bringing joyful moments through digitally interactive
            means, with a keen eye for a quality experience to all users.
          </div>
          <div className="about-me-icons-containers">
            {/* <a
              target="_blank"
              href="https://www.linkedin.com/in/davidkalatzis/"
            >
              <GitHubIcon />
            </a> */}
            {/* <a
              target="_blank"
              href="https://www.linkedin.com/in/davidkalatzis/"
            >
              <LinkedinIcon />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
