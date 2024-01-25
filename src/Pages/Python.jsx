import React from 'react';
import { useState } from 'react';

export default function Python() {
    const questions = [
        {
            questionText: 'Is Python case sensitive when dealing with identifiers?',
            answerOptions: [
                { answerText: 'machine dependent', isCorrect: false },
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },
                { answerText: 'none of the mentioned', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following is the correct extension of the Python file?',
            answerOptions: [
                { answerText: '.python', isCorrect: false },
                { answerText: '.pl', isCorrect: false },
                { answerText: '.p', isCorrect: false },
                { answerText: '.py', isCorrect: true },
            ],
        },
        {
            questionText: 'Which keyword is used for function in Python language?',
            answerOptions: [
                { answerText: 'def', isCorrect: true },
                { answerText: 'function', isCorrect: false },
                { answerText: 'fun', isCorrect: false },
                { answerText: 'define', isCorrect: false },
            ],
        },
        {
            questionText: 'What will be the value of the following Python expression?(4 + 3 % 5)',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '2', isCorrect: false },
                { answerText: '7', isCorrect: true },
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
  
  