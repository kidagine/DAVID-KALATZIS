import "./About.css";
import BasedIn from "../../assets/svgs/BasedIn.svg?react";

function About() {
  return (
    <div className="about-me">
      <div className="about-me-section">
        <div className="about-me-top">
          <div className="about-me-based-in about-me-part ">
            <div className="about-me-title-group">
              {/* <BasedIn className="about-me-icon" /> */}
              <div className="about-me-title">Location:</div>
            </div>
            <div className="about-me-description">Denmark, Vejle</div>
          </div>
          <div className="about-me-education about-me-part ">
            <div className="about-me-title-group">
              {/* <BasedIn className="about-me-icon" /> */}
              <div className="about-me-title">Education:</div>
            </div>
            <div className="about-me-description">
              Erhvervsakademi SydVest Software Development
            </div>
          </div>
        </div>

        <div className="about-me-bottom">
          <div className="about-me-work about-me-part ">
            <div className="about-me-title-group">
              {/* <BasedIn className="about-me-icon" /> */}
              <div className="about-me-title">Work:</div>
            </div>
            <div className="about-me-list">
              <div className="about-me-list-item">
                <div className="about-me-description">
                  React Developer | LEGO
                </div>
                <div className="about-me-description">2025 - Present</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">
                  Unity Developer | Inner Engine
                </div>
                <div className="about-me-description">2023-2025</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">
                  Unity Developer | Ampersand
                </div>
                <div className="about-me-description">2022-2025</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">
                  Unity Developer | Undisclosed
                </div>
                <div className="about-me-description">2022-2023</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">
                  React Developer | Grumsen Development
                </div>
                <div className="about-me-description">2021</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">
                  Unity Developer | Oneiros
                </div>
                <div className="about-me-description">2020</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">
                  Unreal Developer | Amunet
                </div>
                <div className="about-me-description">2020</div>
              </div>
            </div>
          </div>
          <div className="about-me-tools about-me-part ">
            <div className="about-me-title-group">
              {/* <BasedIn className="about-me-icon" /> */}
              <div className="about-me-title">Tools:</div>
            </div>
            <div className="about-me-list">
              <div className="about-me-list-item">
                <div className="about-me-description">Unity</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">Unreal</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">Godot</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">React</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">C#</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">C++</div>
              </div>
              <div className="about-me-list-item">
                <div className="about-me-description">JS/TS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
