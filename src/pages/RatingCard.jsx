import React, { useEffect, useRef } from 'react';
import "../styles/feedback.css";

const RatingCard = ({ 
  feedbackScore, 
  onScoreChange, 
  landmarkTitle, 
  onTitleChange,
  description, 
  onDescriptionChange,
  onImageUpload,
  images,
  onSubmit,
  onClose // Add a callback to close the card when clicking outside
}) => {
  const cardRef = useRef(null);

  // Close the card if a click occurs outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onClose(); // Call the onClose callback
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="rating-card" ref={cardRef}>
      <div className="rating-card__front">
        <div className="rating-card__img">
          <img
            src="https://rvs-interactive-rating-component.vercel.app/images/icon-star.svg"
            alt="Star icon"
          />
        </div>
        <div className="rating-card__content">
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="rating-card__ratings">
          {[1, 2, 3, 4, 5].map((score) => (
            <button
              key={score}
              className={feedbackScore === score ? "active" : ""}
              onClick={() => onScoreChange(score)}
            >
              {score}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Enter Landmark Title"
          value={landmarkTitle}
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={onImageUpload}
        />
        {images.length > 0 && (
          <div className="image-preview-container">
            <img
              src={images[0]}
              alt="Preview"
              className="image-preview"
            />
          </div>
        )}
        <button
          className="rating-card__btn"
          onClick={onSubmit}
          disabled={feedbackScore === 0}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RatingCard;
