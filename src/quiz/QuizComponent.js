import { useState } from "react";
import "./quiz-component.scss";

function QuizComponent({image, question, answer1, answer1Score, answer2, answer2Score,
    answer3, answer3Score, answer4, answer4Score, id, numeroQuestion, onAnswerChange}){
    
  const [selectedValue, setSelectedValue ] = useState('');

  const handleRadioChange = (e) => {
  const answerScore = e.target.value;
  setSelectedValue(answerScore)
  onAnswerChange(id, answerScore)
  }
    
    return(
        <div className="wrapper-quiz-comp">
            <div className="quiz-comp-wrapper">
                        <form className="quiz-comp-form">
                        <img className="quiz-image"src={image}/>
                        <div className='quiz-questions-wrapper'>
                        <label key={id} className="quiz-comp-title">{numeroQuestion}: {question}</label>
                        <label className="quiz-comp-label-answer">
                            <input 
                            type="radio" 
                            name={`myRadioGroup_${id}`} 
                            className="checkbox" 
                            value={answer1Score} 
                            checked={selectedValue === answer1Score}
                            onChange={handleRadioChange}
                            />
                            <p className="quiz-comp-form-p">{answer1},{answer1Score}</p>
                         </label>

                         <label className="quiz-comp-label-answer">
                            <input type="radio" 
                            name={`myRadioGroup_${id}`} 
                            className="checkbox" 
                            value={answer2Score}
                            checked={selectedValue === answer2Score}
                            onChange={handleRadioChange}
                            />
                            <p className="quiz-comp-form-p">{answer2} {answer2Score}</p>
                         </label>

                         <label className="quiz-comp-label-answer">
                            <input type="radio" 
                            name={`myRadioGroup_${id}`} 
                            className="checkbox" 
                            value={answer3Score}
                            checked={selectedValue === answer3Score}
                            onChange={handleRadioChange}
                            />
                            <p className="quiz-comp-form-p">{answer3} {answer3Score}</p>
                         </label>

                         <label className="quiz-comp-label-answer">
                            <input type="radio" 
                           name={`myRadioGroup_${id}`} 
                            className="checkbox" 
                            value={answer4Score}
                            checked={selectedValue === answer4Score}
                            onChange={handleRadioChange}
                            />
                            <p className="quiz-comp-form-p">{answer4} {answer4Score}</p>
                         </label>  
                         </div>       
                         </form>     
            </div>
        
        </div>
    )
}

export default QuizComponent;