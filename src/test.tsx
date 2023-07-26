import React, { useState } from 'react';
import './test.css'


interface FlashcardProps {
  word: string;
  meaning: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ word, meaning }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front">
        <h3>{word}</h3>
      </div>
      <div className="back">
        <p>{meaning}</p>
      </div>
    </div>
  );
};

const FlashcardApp = () => {
  return (
    <div className="flashcard-container">
      <Flashcard word="Hello" meaning="สวัสดี" />
      <Flashcard word="Goodbye" meaning="ลาก่อน" />
      <Flashcard word="Thank you" meaning="ขอบคุณ" />
    </div>
  );
};

export default FlashcardApp;
