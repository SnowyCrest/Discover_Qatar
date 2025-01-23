import React, { useState } from 'react';
import Homepage from './pages/homepage';
import Map from './pages/map';
import Quiz from './pages/quiz';
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

  return (
    <TransitionProvider>
      <div className="app-container">
        <div className={`pages-wrapper ${currentPage !== 'home' ? 'show-map' : ''}`}>
          <Homepage 
            onMapClick={handleMapClick} 
            onQuizClick={handleQuizClick} 
          />
          {currentPage === 'map' && <Map onBackClick={handleBackClick} />}
          {currentPage === 'quiz' && <Quiz onBackClick={handleBackClick} />}
        </div>
      </div>
    </TransitionProvider>
  );
};

export default App;