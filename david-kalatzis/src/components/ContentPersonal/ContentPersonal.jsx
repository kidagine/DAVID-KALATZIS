import "./ContentPersonal.css";
import { useEffect, useRef, useState } from "react";

function ContentPersonal({ images, onContentClick }) {
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const currentRefs = itemRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.15 }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleItems]);

  return (
    <div className="content-personal">
      {images.map((data, index) => (
        <div
          className={`content-item ${
            visibleItems.includes(index) ? "visible" : ""
          }`}
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          data-index={index}
          onClick={() => onContentClick(data)}
        >
          <img
            src={data.image}
            alt={`content image ${index + 1}`}
            className="content-image"
            loading="lazy"
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
          <div className="content-learn-more">
            <div>Learn More</div>
            {/* <ArrowRight className="content-learn-more-icon" /> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentPersonal;
