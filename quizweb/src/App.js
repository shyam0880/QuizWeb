import { useState } from "react";

function App() {
  const [subject,setsubject] = useState(null);
   function renderPage(){
    switch(subject){
      case 'JAVA':
        return <Java/>
      case 'SQL':
        return <Sql/>
      case 'PYTHON':
        return <Python/>
      default:
        return <h1>  </h1>
    }
  }
  return (
    <div>
      <button onClick={() => setsubject('JAVA')}>JAVA</button>
      <button onClick={() => setsubject('SQL')}>SQL</button>
      <button onClick={() => setsubject('PYTHON')}>PYTHON</button>
      {renderPage()}
    </div>
    
  );
}

function Java(){
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

const [currentQuestion,setCurrentQuestion] = useState(0);



  return(
    <div>
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
    </div>
  );
}

function Sql(){
  return(
    <div>
      Inside SQL
    </div>
  );
}

function Python(){
  return(
    <div>
      Inside Python
    </div>
  );
}

export default App;
