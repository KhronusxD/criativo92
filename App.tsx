import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import QuizModal from './components/QuizFlow/QuizModal';

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => {
    setIsQuizOpen(true);
    // Optional: prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <LandingPage onStartQuiz={openQuiz} />
      {isQuizOpen && <QuizModal onClose={closeQuiz} />}
    </>
  );
}