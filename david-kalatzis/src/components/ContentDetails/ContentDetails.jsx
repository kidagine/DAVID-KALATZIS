import "./ContentDetails.css";

function ContentDetails({ data }) {
  return (
    <div className="content-details">
      <h2>{data.title}</h2>
      <p>
        <strong>Company:</strong> {data.company}
      </p>
      <p>
        <strong>Date:</strong> {data.date}
      </p>
      <img src={data.image} alt={data.title} className="details-image" />
    </div>
  );
}

export default ContentDetails;
