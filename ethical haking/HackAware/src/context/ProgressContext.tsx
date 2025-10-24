import React, { createContext, useContext, useState } from 'react';

interface ProgressContextType {
  preScore: number;
  postScore: number;
  updatePreScore: (score: number) => void;
  updatePostScore: (score: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preScore, setPreScore] = useState<number>(0);
  const [postScore, setPostScore] = useState<number>(0);

  const updatePreScore = (score: number) => {
    setPreScore(score);
  };

  const updatePostScore = (score: number) => {
    setPostScore(score);
  };

  return (
    <ProgressContext.Provider value={{ preScore, postScore, updatePreScore, updatePostScore }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};