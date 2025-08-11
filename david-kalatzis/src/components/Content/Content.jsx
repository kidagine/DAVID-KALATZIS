import "./Content.css";

function Content({ images }) {
  return (
    <div>
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
  );
}

export default Content;
