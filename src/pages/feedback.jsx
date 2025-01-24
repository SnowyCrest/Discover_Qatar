import React, { useState, useEffect } from "react";
import RatingCard from "../components/RatingCard";
import "../styles/feedback.css";
import "../index.css"
const ExperienceForm = ({ onBackClick }) => {
  const [feedbackScore, setFeedbackScore] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [landmarkTitle, setLandmarkTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [feedbackList, setFeedbackList] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [newComment, setNewComment] = useState("");

  const handleBack = (e) => {
    e.preventDefault();
    onBackClick();
  };

  // Fetch feedback list on component mount
  useEffect(() => {
    fetch("http://localhost:5000/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackList(data))
      .catch((error) => console.error("Error fetching feedback:", error));
  }, []);

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setImages(newImages);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  // Handle feedback submission
  const handleSubmit = () => {
    const newFeedback = {
      score: feedbackScore,
      title: landmarkTitle,
      description: description,
      images: images,
    };

    fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })
      .then((response) => response.json())
      .then((data) => {
        setFeedbackList((prevList) => [...prevList, data.feedback]);
        setLandmarkTitle("");
        setDescription("");
        setImages([]);
        setFeedbackScore(0);
        setIsFormVisible(false);
      })
      .catch((error) => console.error("Error submitting feedback:", error));
  };

  // Handle adding a comment
  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const feedbackId = selectedFeedback.id;

    // Send the new comment to the backend
    fetch(`http://localhost:5000/api/feedback/${feedbackId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: newComment }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the comments list locally
        const updatedFeedbackList = feedbackList.map((feedback) => {
          if (feedback.id === feedbackId) {
            feedback.comments = data.comments; // Update with the new comment list from the server
          }
          return feedback;
        });

        setFeedbackList(updatedFeedbackList);
        setNewComment(""); // Reset the new comment input field
      })
      .catch((error) => console.error("Error adding comment:", error));
  };

  // Handle image navigation in the popup
  const handleImageNavigation = (direction) => {
    const newIndex =
      (selectedImageIndex + direction + selectedFeedback.images.length) %
      selectedFeedback.images.length;
    setSelectedImageIndex(newIndex);
  };

  // Handle closing the Rating Card popup
  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="page-container">
      <div>
      <a href="#" onClick={handleBack} className="back-button">← Back to Home</a>
      </div>
      {/* Rating Card Popup */}
      {isFormVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <RatingCard
              feedbackScore={feedbackScore}
              onScoreChange={setFeedbackScore}
              landmarkTitle={landmarkTitle}
              onTitleChange={setLandmarkTitle}
              description={description}
              onDescriptionChange={setDescription}
              onImageUpload={handleImageUpload}
              images={images}
              onSubmit={handleSubmit}
              onClose={handleCloseForm} // Pass the handleCloseForm to RatingCard
            />
          </div>
        </div>
      )}

      {/* Feedback Grid */}
      {!isFormVisible && (
        <div className="feedback-grid">
          {feedbackList.map((feedback) => (
            <div
              key={feedback.id}
              className="feedback-item"
              onClick={() => {
                setSelectedFeedback(feedback);
                setSelectedImageIndex(0); // Reset image index
              }}
            >
              <p className="stars">
                {"★".repeat(feedback.score)}
                {"☆".repeat(5 - feedback.score)}
              </p>
              <p className="landmark-title">{feedback.title}</p>
              <p className="description">{feedback.description}</p>
              {feedback.images.length > 0 && (
                <img
                  src={feedback.images[0]}
                  alt="feedback"
                  className="feedback-image"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Comment Section */}
      {selectedFeedback && (
        <div className="comments-section">
          <h3>Comments:</h3>
          <div className="comments-list">
            {selectedFeedback.comments.map((comment, index) => (
              <div key={index} className="comment-item">
                {comment}
              </div>
            ))}
          </div>

          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          ></textarea>
          <button onClick={handleAddComment}>Submit Comment</button>

          {/* Image Viewer */}
          {selectedFeedback.images.length > 0 && (
            <div className="image-popup">
              <img
                src={selectedFeedback.images[selectedImageIndex]}
                alt="Feedback"
                className="popup-image"
              />
              <button onClick={() => handleImageNavigation(-1)}>Previous</button>
              <button onClick={() => handleImageNavigation(1)}>Next</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;