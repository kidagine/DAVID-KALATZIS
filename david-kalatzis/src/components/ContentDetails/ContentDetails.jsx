import "./ContentDetails.css";
import ArrowUpRightIcon from "../../assets/svgs/ArrowUpRight.svg?react";

function ContentDetails({ data }) {
  return (
    <div className="content-details">
      <div className="content-details-main-section">
        <div className="content-details-main-info">
          <div className="content-details-main-group">
            <div className="content-details-main-company">{data.company}</div>
            <a
              className="content-details-link-icon-group"
              href={data.url}
              target="_blank"
            >
              <ArrowUpRightIcon className="content-details-link-icon" />
            </a>
          </div>
          <div className="content-details-main-title">{data.title}</div>
        </div>
        <div className="content-details-main-date">{data.date}</div>
      </div>
      <div className="content-details-sections">
        {data.details?.map((detail, index) => {
          const section = detail.section[0]; // each section is an array with one object

          switch (section.type) {
            case "_text":
              return (
                <div key={index} className="content-details-section-text">
                  <div className="content-details-title">{section.title}</div>
                  <div className="content-details-description">
                    {section.body}
                  </div>
                </div>
              );
            case "_image":
              return (
                <div key={index} className="content-details-section-image">
                  <img
                    src={section.url}
                    alt="Detail"
                    className="content-details-image"
                  />
                </div>
              );
            case "_video":
              return (
                <div key={index} className="content-details-section-video">
                  <iframe
                    className="content-details-video"
                    src={section.url}
                    allowFullScreen
                    title={`video-${index}`}
                  ></iframe>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default ContentDetails;
