import React, { createContext, useState, useContext } from 'react';

const TransitionContext = createContext({
  isExiting: false,
  setIsExiting: () => {},
  direction: 'right',
  setDirection: () => {}
});

export const TransitionProvider = ({ children }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [direction, setDirection] = useState('right');

  const value = {
    isExiting,
    setIsExiting,
    direction,
    setDirection
  };

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('usePageTransition must be used within a TransitionProvider');
  }
  return context;
};
