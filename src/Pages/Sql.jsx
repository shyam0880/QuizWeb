import React from 'react';
import { useState } from 'react';

export default function Sql() {
    const questions = [
        {
            questionText: 'What is the full form of SQL?',
            answerOptions: [
                { answerText: 'Structured Query List', isCorrect: false },
                { answerText: 'Sample Query Language', isCorrect: false },
                { answerText: 'Structure Query Language', isCorrect: true },
                { answerText: 'None of these.', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following is not a valid SQL type?',
            answerOptions: [
                { answerText: 'FLOAT', isCorrect: false },
                { answerText: 'NUMERIC', isCorrect: false },
                { answerText: 'DECIMAL', isCorrect: true },
                { answerText: 'CHARACTER', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following is not a DDL command?',
            answerOptions: [
                { answerText: 'TRUNCATE', isCorrect: false },
                { answerText: 'ALTER', isCorrect: false },
                { answerText: 'CREATE', isCorrect: false },
                { answerText: 'UPDATE', isCorrect: true },
            ],
        },
        {
            questionText: 'SQL Views are also known as',
            answerOptions: [
                { answerText: 'Simple tables', isCorrect: false },
                { answerText: 'Virtual tables', isCorrect: true },
                { answerText: 'Complex tables', isCorrect: false },
                { answerText: 'Actual Tables', isCorrect: false },
            ],
        },
    ];

const [currentQuestion,setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);

const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
        setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
};


  return(
    <div>
        {showScore ?(
            <div className='score-section'>
            You scored {score} out of {questions.length}
            </div>
        ):(
            <>
            <div className="question-sec">
                <div className="question-count">
                    <span>Question: {currentQuestion+1}</span>/{questions.length}
                </div>
                <div className="question-text">
                    {questions[currentQuestion].questionText}
                </div>
            </div>
            <div className="answer-sec">
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
            </div>
            </>
        )}
    </div>
  );
}
  
  