import { useState} from "react";
import "./quiz-component.scss";
import questionsColors from "../data/questionsColor";

function QuizComponent({image, question, answer1, answer1Score, answer2, answer2Score,
    answer3, answer3Score, answer4, answer4Score, id, 
    numeroQuestion, onAnswerChange, handleNextQuestion, displayNextButton}){
    
  const [selectedValue, setSelectedValue ] = useState('');


  const handleRadioChange = (e) => {
  const answerScore = e.target.value;
  setSelectedValue(answerScore)
  onAnswerChange(id, answerScore)
  }
 
  const getQuestionsColorClass = (questionNumber) => {
        return questionsColors[questionNumber];
  }
  const questionColorClass = getQuestionsColorClass(numeroQuestion);

  const handleNextQuestionClick = () => {
   setSelectedValue('');
   handleNextQuestion();
 };

    return(
        <div className="wrapper-quiz-comp">
                        <form className="quiz-comp-form">
                        <img className="quiz-image"src={image}/>
                        <div className={`quiz-questions-wrapper ${questionColorClass}`}>
                        <label key={id} className="quiz-comp-title">{numeroQuestion}. {question}</label>
                        <label className="quiz-comp-label-answer">
                            <input 
                            type="radio" 
                            name={`myRadioGroup_${id}`} 
                            className="checkbox" 
                            value={answer1Score} 
                            checked={selectedValue === answer1Score}
                            onChange={handleRadioChange}
                            required
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
                            required
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
                            required
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
                            required
                            />
                            <p className="quiz-comp-form-p">{answer4} {answer4Score}</p>
                         </label>  
                         {
                           displayNextButton ?  <button type="button" onClick={handleNextQuestionClick} className={`next ${questionColorClass}`}>
                           Next <span className={`triangle ${questionColorClass}`}></span></button>   : null
                         }
                      
                    </div>
                </form>  
            </div>
        
    )
}

export default QuizComponent;