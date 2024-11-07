import React, { useState } from 'react';
import './App.css';

const Welcome = ({ startQuiz }) => {
  const [section, setSection] = useState(1);

  const handleWheel = (e) => {
    if (e.deltaY > 0 && section < 3) {
      setSection(prevSection => prevSection + 1);
    } else if (e.deltaY < 0 && section > 1) {
      setSection(prevSection => prevSection - 1);
    }
  };

  return (
    <div className={`welcome-container section-${section}`} onWheel={handleWheel}>
      {section === 1 && (
        <>
          <h1 className={`welcome-title ${section === 1 ? 'show' : ''}`}>
            ¿Qué tan corrupto eres?
          </h1>
          <div className="arrow-down"></div>
        </>
      )}
      {section === 2 && (
        <p className={`welcome-paragraph ${section === 2 ? 'show' : ''}`}>
          Descubre tus niveles de honestidad y ética en este cuestionario.
        </p>
      )}
      {section === 3 && (
        <button
          className={`welcome-button ${section === 3 ? 'show' : ''}`}
          onClick={startQuiz}
        >
          Comenzar Encuesta
        </button>
      )}
    </div>
  );
};

export default Welcome;
