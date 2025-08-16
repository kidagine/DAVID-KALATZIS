import "./Content.css";

function Content({ images }) {
  return (
    <div>
      {images.map((data, index) => (
        <div className="content-item" key={index}>
          <img
            src={data.image}
            alt={`content image ${index + 1}`}
            className="content-image"
          />
          <div className="content-info">
            <div className="content-info-inner">
              <div>{data.company}</div>
              <div className="content-info-details">
                <div>{data.title}</div>
                <div>{data.date}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
