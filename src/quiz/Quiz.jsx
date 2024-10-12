import { useState } from "react";

import quations from "./questions";

import QuestionList from "./questionList";

import ShowScore from "./showScore";


function Quiz() {

    const [currentQuestion , setCurrentQuestion] = useState(0);

    const [currentAnswer , setCurrentAnswer] = useState(null);

    const [showButtion , setShowButton] = useState(false);

    const [score , setScore] = useState(0);

    const handleClick = (option)=>{
        setCurrentAnswer(option);

        if(quations[currentQuestion].answer === option)
        {
            setScore(score+1);
        }

        setShowButton(true);
    }

  return (
    <div className="parent">
        <h3>Quiz</h3>
     {
        currentQuestion < quations.length ?
        <div>
        <QuestionList question={quations[currentQuestion].question} options={quations[currentQuestion].options}  handleClick ={handleClick} currentAnswer={currentAnswer} />

        {
            showButtion  && <button onClick={()=>{
                setCurrentQuestion(currentQuestion+1)
                setShowButton(false)
            }}>Next Question</button>
        }

        </div>:<ShowScore score={score}/>

    }
    </div>
  )
}

export default Quiz
