import "./About.css";

function About() {
  return (
    <div className="about-me">
      <div className="about-me-section">
        <div className="about-me-top">
          <div className="about-me-based-in">
            <div className="about-me-title">Based In:</div>
            <div className="about-me-description">Denmark, Vejle</div>
          </div>
          <div className="about-me-education">
            <div className="about-me-title">Education:</div>
            <div className="about-me-description">
              Erhvervsakademi SydVest Software Development
            </div>
          </div>
        </div>

        <div className="about-me-bottom">
          <div className="about-me-work">
            <div className="about-me-title">Work Exp:</div>
            <div className="about-me-list">
              <div className="about-me-description">LEGO | 2025</div>
              <div className="about-me-description">
                Inner Engine | 2023-2025
              </div>
              <div className="about-me-description">
                Ampersand Associates | 2022-2025
              </div>
              <div className="about-me-description">
                Undisclosed | 2022-2023
              </div>
              <div className="about-me-description">Oneiros | 2021-2022</div>
              <div className="about-me-description">
                Grumsen Development | 2020
              </div>
              <div className="about-me-description">Amunet | 2020</div>
            </div>
          </div>
          <div className="about-me-tools">
            <div className="about-me-title">Tools & Languages:</div>
            <div className="about-me-list">
              <div className="about-me-description">Unity</div>
              <div className="about-me-description">Unreal</div>
              <div className="about-me-description">React</div>
              <div className="about-me-description">C#</div>
              <div className="about-me-description">C++</div>
              <div className="about-me-description">JS/TS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
