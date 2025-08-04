import "./TopBar.css";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner-container">
        <div className="top-bar-icon">icon</div>
        <div className="top-bar-buttons-container">
          <button>Contact</button>
          <button>CV</button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
