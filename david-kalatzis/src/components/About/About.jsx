import "./About.css";
import BasedIn from "../../assets/svgs/BasedIn.svg?react";
import Education from "../../assets/svgs/Education.svg?react";
import Work from "../../assets/svgs/Work.svg?react";
import Tools from "../../assets/svgs/Tools.svg?react";
import { aboutData } from "../../data/AboutData";
import { professionalData } from "../../data/ContentProfessionalData";

function About() {
  return (
    <div className="about-me">
      <div className="about-me-section">
        <div className="about-me-top">
          <div className="about-me-based-in about-me-part ">
            <div className="about-me-title-group">
              <BasedIn className="about-me-icon" />
              <div className="about-me-title">{aboutData.location}</div>
            </div>
            <div className="about-me-description">{aboutData.locationText}</div>
          </div>
          <div className="about-me-education about-me-part ">
            <div className="about-me-title-group">
              <Education className="about-me-icon" />
              <div className="about-me-title">{aboutData.education}</div>
            </div>
            <div className="about-me-description">
              {aboutData.educationText}
            </div>
          </div>
        </div>

        <div className="about-me-bottom">
          <div className="about-me-work about-me-part ">
            <div className="about-me-title-group">
              <Work className="about-me-icon" />
              <div className="about-me-title">{aboutData.work}</div>
            </div>
            <div className="about-me-list">
              {professionalData.map((item, index) => (
                <div className="about-me-list-item" key={index}>
                  <div className="about-me-list-description">
                    <div className="about-me-description">
                      {item.title} |{" "}
                      <a className="about-me-description" href={item.url}>
                        {item.company}
                      </a>
                    </div>
                  </div>
                  <div className="about-me-description">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-me-tools about-me-part ">
            <div className="about-me-title-group">
              <Tools className="about-me-icon" />
              <div className="about-me-title">{aboutData.tools}</div>
            </div>
            <div className="about-me-list">
              {aboutData.toolsItems.map((item, index) => (
                <div className="about-me-list-item" key={index}>
                  <div className="about-me-description">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
