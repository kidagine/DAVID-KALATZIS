import "./ContentDetails.css";

function ContentDetails({ data }) {
  return (
    <div className="content-details">
      <div className="content-details-main-section">
        <div className="content-details-main-info">
          <div className="content-details-main-company">{data.company}</div>
          <div className="content-details-main-title">{data.title}</div>
        </div>
        <div className="content-details-main-date">{data.date}</div>
      </div>
      <div className="content-details-section">
        <div className="content-details-title">{"salkdjsalkdjsalkd"}</div>
        <div className="content-details-description">
          {"sdhasjldhasjdaskdha"}
        </div>
      </div>
      <div className="content-details-section">s</div>
      <div className="content-details-section">s</div>
    </div>
  );
}

export default ContentDetails;
