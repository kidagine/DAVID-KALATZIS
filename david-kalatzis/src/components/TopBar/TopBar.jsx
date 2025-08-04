import "./TopBar.css";

function TopBar({ isSticky }) {
  return (
    <div className={`top-bar ${isSticky ? "is-sticky" : ""}`}>
      <div
        className={`top-bar-inner-container  ${isSticky ? "is-sticky" : ""}`}
      >
        <div className="top-bar-icon">icon</div>
        <div className="top-bar-selector-group">
          <button className="top-bar-selector-button m--active">
            Personal
          </button>
          <button className="top-bar-selector-button">Professional</button>
        </div>
        <div className="top-bar-buttons-container">
          <button className="top-bar-button">Contact</button>
          <button className="top-bar-button">CV</button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
