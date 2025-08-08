import "./Content.css";

function Content({ images }) {
  return (
    <div className="content">
      <div className="content-container">
        {images.map((src, index) => (
          <div className="content-item" key={index}>
            <img
              src={src}
              alt={`content image ${index + 1}`}
              className="content-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
