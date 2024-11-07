import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import Question from './Question';
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
          <Route
            path="/"
            element={
              quizStarted ? (
                <Navigate to="/question/1" replace />
              ) : (
                <Welcome startQuiz={startQuiz} />
              )
            }
          />
          <Route
            path="/question/:id"
            element={<Question saveAnswer={saveAnswer} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
