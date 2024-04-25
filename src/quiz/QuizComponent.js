
import "./quiz-component.scss";

function QuizComponent({image, question, answer1, answer1Score, answer2, answer2Score,
    answer3, answer3Score, answer4, answer4Score, id}){
  
    return(
        <div className="wrapper-quiz-comp">
            <div className="quiz-comp-wrapper">
                        <form className="quiz-comp-form">
                        <img className="quiz-image"src={image}/>
                        <div className='quiz-questions-wrapper'>
                        <label key={id} className="quiz-comp-title">{question}</label>
                        <label className="quiz-comp-label-answer">
                            <input type="radio" name="myCheckbox" className="checkbox" value={answer1Score}/>
                            <p className="quiz-comp-form-p">{answer1}</p>
                         </label>
                         <label className="quiz-comp-label-answer">
                            <input type="radio" name="myCheckbox" className="checkbox" value={answer2Score}/>
                            <p className="quiz-comp-form-p">{answer2}</p>
                         </label>
                         <label className="quiz-comp-label-answer">
                            <input type="radio" name="myCheckbox" className="checkbox" value={answer3Score}/>
                            <p className="quiz-comp-form-p">{answer3}</p>
                         </label>
                         <label className="quiz-comp-label-answer">
                            <input type="radio" name="myCheckbox" className="checkbox" value={answer4Score}/>
                            <p className="quiz-comp-form-p">{answer4}</p>
                         </label>  
                         <input type="submit" value="suivant" className="quiz-comp-submit"/>
                         </div>       
                         </form>     
            </div>
        </div>
    )
}

export default QuizComponent;