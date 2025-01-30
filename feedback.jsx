// ...existing code...
<div 
  className="feedback-image-modal-wrapper"
  role="dialog"
  aria-modal="true"
  onClick={handleImageModalClose}
>
  <div className="feedback-image-modal active"></div>
  <div className="feedback-modal-content" onClick={e => e.stopPropagation()}>
    <img
      src={modalImage}
      alt="Enlarged feedback"
      className="feedback-modal-image active"
    />
    <button 
      className="feedback-modal-close"
      onClick={handleImageModalClose}
      aria-label="Close modal"
    >
      ×
    </button>
  </div>
</div>
// ...existing code...
