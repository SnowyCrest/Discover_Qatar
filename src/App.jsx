import React, { useState } from 'react';
import Homepage from './pages/homepage';
import Map from './pages/map';
import Quiz from './pages/quiz';
import ExperienceForm from './pages/feedback';
import { TransitionProvider } from './context/TransitionContext';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleMapClick = () => {
    setCurrentPage('map');
  };

  const handleQuizClick = () => {
    setCurrentPage('quiz');
  };

  const handleBackClick = () => {
    setCurrentPage('home');
  };
  const handleFeedbackClick = () => {
    setCurrentPage('feedback');
  };

  return (
    <TransitionProvider>
      <div className="app-container">
        <div className={`pages-wrapper ${currentPage !== 'home' ? 'show-map' : ''}`}>
          <Homepage onMapClick={handleMapClick} onQuizClick={handleQuizClick} onFeedbackClick={handleFeedbackClick} />
          {currentPage === 'map' && <Map onBackClick={handleBackClick} />}
          {currentPage === 'quiz' && <Quiz onBackClick={handleBackClick} />}
          {currentPage === 'feedback' && <ExperienceForm onBackClick={handleBackClick} />}

        </div>
      </div>
    </TransitionProvider>
  );
};

export default App;
