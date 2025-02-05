import React from 'react';
import './abstractVectors.css';

const AbstractVectors = () => {
  return (
    <>
      <div className="pattern-container">
        <img src="/src/assets/bg_pattern.svg" alt="Background pattern" className="bg-pattern" />
      </div>
      <div className="corner-decorations">
        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
      </div>
    </>
  );
};

export default AbstractVectors;
