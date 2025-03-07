import React, { useEffect, useRef, useState } from "react"
import "../styles/feedback.css"

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
  onClose,
}) => {
  const cardRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [onClose])

  const handleScoreChange = (score) => {
    setIsAnimating(true)
    onScoreChange(score)
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <div className="rating-card" ref={cardRef}>
      <div className="rating-card__front">
        <div className="rating-card__header">
          <div className="rating-card__img">
            <img src="https://rvs-interactive-rating-component.vercel.app/images/icon-star.svg" alt="Star icon" />
          </div>
          <h2>How was your visit?</h2>
        </div>
        <div className="rating-card__content">
          <p>
            Tell others about your experience when exploring Qatar!
          </p>
        </div>
        <div className={`rating-card__ratings ${isAnimating ? "animate" : ""}`}>
          {[1, 2, 3, 4, 5].map((score) => (
            <button
              key={score}
              className={feedbackScore === score ? "active" : ""} 
              onClick={() => handleScoreChange(score)}
            >
              {score}
            </button>
          ))}
        </div>
        <div className="rating-card__inputs">
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
        </div>
        <div className="rating-card__file-upload">
          <label htmlFor="file-upload" className="custom-file-upload">
            <i className="fa fa-cloud-upload"></i> Upload Images
          </label>
          <input id="file-upload" type="file" accept="image/*" multiple onChange={onImageUpload} />
        </div>
        {images.length > 0 && (
          <div className="image-preview">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Preview ${index + 1}`} />
            ))}
          </div>
        )}
        <button className="rating-card__btn" onClick={onSubmit} disabled={feedbackScore === 0}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default RatingCard

