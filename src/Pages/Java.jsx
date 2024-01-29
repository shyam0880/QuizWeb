import React from 'react';
import { useState } from 'react';

export default function Java() {
    const questions = [
        {
            questionText: 'Which of the following option leads to the portability and security of Java?',
            answerOptions: [
                { answerText: 'Bytecode is executed by JVM', isCorrect: true },
                { answerText: 'The applet makes the Java code secure and portable', isCorrect: false },
                { answerText: 'Use of exception handling', isCorrect: false },
                { answerText: 'Dynamic binding between objects', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following is not a Java features?',
            answerOptions: [
                { answerText: 'Dynamic', isCorrect: false },
                { answerText: 'Architecture Neutral', isCorrect: false },
                { answerText: 'Use of pointers', isCorrect: true },
                { answerText: 'Object-oriented', isCorrect: false },
            ],
        },
        {
            questionText: ' _____ is used to find and fix bugs in the Java programs?',
            answerOptions: [
                { answerText: 'JVM', isCorrect: false },
                { answerText: 'JRE', isCorrect: false },
                { answerText: 'JDK', isCorrect: false },
                { answerText: 'JDB', isCorrect: true },
            ],
        },
        {
            questionText: 'An interface with no fields or methods is known as a ______.',
            answerOptions: [
                { answerText: 'Runnable Interface', isCorrect: false },
                { answerText: 'Marker Interface', isCorrect: true },
                { answerText: 'Abstract Interface', isCorrect: false },
                { answerText: 'CharSequence Interface', isCorrect: false },
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
  
  