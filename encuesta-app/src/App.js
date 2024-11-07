// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import Question from './Question';
import ThankYou from './ThankYou';
import './App.css';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState({});

  const saveAnswer = (questionId, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {!quizStarted ? (
            <Route path="/" element={<Welcome startQuiz={startQuiz} />} />
          ) : (
            <>
              <Route path="/" element={<Navigate to="/question/1" />} />
              <Route
                path="/question/:id"
                element={<Question saveAnswer={saveAnswer} />}
              />
              <Route path="/thank-you" element={<ThankYou />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
