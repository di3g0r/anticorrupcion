import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './App.css';

const questions = [
  { id: 1, text: '¿Cuál es tu color favorito?', options: ['Rojo', 'Azul', 'Verde', 'Amarillo'] },
  { id: 2, text: '¿Cuál es tu animal favorito?', options: ['Perro', 'Gato', 'Elefante', 'León'] },
  // Agrega más preguntas aquí si lo deseas
];

const Question = ({ saveAnswer }) => {
  const { id } = useParams();
  const question = questions.find(q => q.id === parseInt(id));
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedOption !== null) {
      saveAnswer(question.id, selectedOption);
      const nextId = parseInt(id) + 1;
      if (nextId > questions.length) {
        navigate('/thank-you');
      } else {
        navigate(`/question/${nextId}`);
      }
    }
  };

  return (
    <div className="quiz-container">
      <div className="question-box">
        <h2>{question.text}</h2>
        <div className="question-options">
          {question.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option-${index}`}
                name="option"
                value={option}
                onChange={() => setSelectedOption(option)}
              />
              <label htmlFor={`option-${index}`} className="option-label">
                {option}
              </label>
            </div>
          ))}
        </div>
        <button
          className="continue-button"
          onClick={handleContinue}
          disabled={selectedOption === null}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Question;
