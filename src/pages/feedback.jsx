import  { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { createClient } from "@supabase/supabase-js"
import RatingCard from "../components/RatingCard"
import "../styles/feedback.css"
import "../index.css"

// Initialize Supabase client
const supabaseUrl = "YOUR-SUPABASE-KEY-HERE"
const supabaseKey = "YOUR-SUPABASE-URL-HERE"
const supabase = createClient(supabaseUrl, supabaseKey)

const ExperienceForm = ({ onBackClick }) => {
  const [feedbackScore, setFeedbackScore] = useState(0)
  const [isFormVisible, setIsFormVisible] = useState(true)
  const [landmarkTitle, setLandmarkTitle] = useState("")
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])
  const [feedbackList, setFeedbackList] = useState([])
  const [selectedFeedback, setSelectedFeedback] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [newComment, setNewComment] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleBack = (e) => {
    e.preventDefault()
    onBackClick()
  }

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase
        .from("feedback")
        .select("*, comments(*)")
        .order("created_at", { ascending: false })

      if (error) throw error
      setFeedbackList(data)
    } catch (error) {
      console.error("Error fetching feedback:", error)
      setError("Failed to load feedback. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageUpload = (event) => {
    const files = event.target.files
    const newImages = []
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader()
      reader.onloadend = () => {
        newImages.push(reader.result)
        if (newImages.length === files.length) {
          setImages(newImages)
        }
      }
      reader.readAsDataURL(files[i])
    }
  }

  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      const newFeedback = {
        score: feedbackScore,
        title: landmarkTitle,
        description: description,
        images: images,
      }

      const { data, error } = await supabase.from("feedback").insert([newFeedback]).select()

      if (error) throw error

      const newFeedbackWithComments = { ...data[0], comments: [] }
      setFeedbackList((prevList) => [newFeedbackWithComments, ...prevList])
      setLandmarkTitle("")
      setDescription("")
      setImages([])
      setFeedbackScore(0)
      setIsFormVisible(false)
    } catch (error) {
      console.error("Error submitting feedback:", error)
      setError("Failed to submit feedback. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddComment = async () => {
    if (!newComment.trim()) return

    const feedbackId = selectedFeedback.id

    try {
      setIsLoading(true)
      const { data, error } = await supabase
        .from("comments")
        .insert([{ feedback_id: feedbackId, content: newComment }])
        .select()

      if (error) throw error

      const updatedFeedbackList = feedbackList.map((feedback) => {
        if (feedback.id === feedbackId) {
          return {
            ...feedback,
            comments: [...feedback.comments, data[0]],
          }
        }
        return feedback
      })

      setFeedbackList(updatedFeedbackList)
      setSelectedFeedback({
        ...selectedFeedback,
        comments: [...selectedFeedback.comments, data[0]],
      })
      setNewComment("")
    } catch (error) {
      console.error("Error adding comment:", error)
      setError("Failed to add comment. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageNavigation = (direction) => {
    const imageElement = document.querySelector(".carousel-image")
    imageElement.style.opacity = "0"
    imageElement.style.transform = `translateX(${direction * 20}px)`

    setTimeout(() => {
      const newIndex =
        (selectedImageIndex + direction + selectedFeedback.images.length) % selectedFeedback.images.length
      setSelectedImageIndex(newIndex)

      setTimeout(() => {
        imageElement.style.opacity = "1"
        imageElement.style.transform = "translateX(0)"
      }, 50)
    }, 300)
  }

  const handleCloseForm = () => {
    setIsFormVisible(false)
  }

  if (isLoading && !feedbackList.length) {
    return (
      <div className="page-container feedback-page">
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="rating-card skeleton">
              <div className="rating-card__front">
                <div className="skeleton-img pulse"></div>
                <div className="skeleton-title pulse"></div>
                <div className="skeleton-text pulse"></div>
                <div className="skeleton-ratings">
                  {[1, 2, 3, 4, 5].map(n => (
                    <div key={n} className="skeleton-circle pulse"></div>
                  ))}
                </div>
                <div className="skeleton-input pulse"></div>
                <div className="skeleton-textarea pulse"></div>
                <div className="skeleton-button pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading && !feedbackList.length) {
    return <div className="loading">Loading...</div>
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  return (
    <div className="page-container feedback-page">
      <div>
        <a href="#" onClick={handleBack} className="back-button">
          ← Back to Home
        </a>
      </div>
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
              onClose={handleCloseForm}
            />
          </div>
        </div>
      )}
      {!isFormVisible && (
        <div className="content-container">
          <div className="feedback-grid">
            {feedbackList.map((feedback) => (
              <div
                key={feedback.id}
                className="feedback-item"
                onClick={() => {
                  setSelectedFeedback(feedback)
                  setSelectedImageIndex(0)
                }}
              >
                <p className="stars">
                  {"★".repeat(feedback.score)}
                  {"☆".repeat(5 - feedback.score)}
                </p>
                <p className="landmark-title">{feedback.title}</p>
                <p className="description">{feedback.description}</p>
                {feedback.images && feedback.images.length > 0 && (
                  <img src={feedback.images[0] || "/placeholder.svg"} alt="feedback" className="feedback-image" />
                )}
              </div>
            ))}
          </div>
          {selectedFeedback && (
            <div className="selected-feedback">
              <h2>{selectedFeedback.title}</h2>
              <button className="close-button" onClick={() => setSelectedFeedback(null)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <p className="stars">
                {"★".repeat(selectedFeedback.score)}
                {"☆".repeat(5 - selectedFeedback.score)}
              </p>
              <p className="description">{selectedFeedback.description}</p>
              {selectedFeedback.images && selectedFeedback.images.length > 0 && (
                <div className="image-carousel">
                  <img
                    src={selectedFeedback.images[selectedImageIndex] || "/placeholder.svg"}
                    alt="Feedback"
                    className="carousel-image"
                  />
                  <div className="carousel-controls">
                    <button onClick={() => handleImageNavigation(-1)} className="carousel-button prev">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >

                      </svg>
                    </button>
                    <button onClick={() => handleImageNavigation(1)} className="carousel-button next">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >

                      </svg>
                    </button>
                  </div>
                </div>
              )}
              <div className="comments-section">
                <h3>Comments:</h3>
                <div className="comments-list">
                  {selectedFeedback.comments.map((comment, index) => (
                    <div key={index} className="comment-item">
                      {comment.content}
                    </div>
                  ))}
                </div>
                <div className="add-comment">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                  ></textarea>
                  <button onClick={handleAddComment} disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit Comment"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
ExperienceForm.propTypes = {
  onBackClick: PropTypes.func.isRequired,
}

export default ExperienceForm


