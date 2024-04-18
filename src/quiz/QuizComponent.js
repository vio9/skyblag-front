import "./quiz-component.scss";

function QuizComponent(){
    return(
        <div className="wrapper-quiz-comp">
            <div className="quiz-comp-wrapper">
                <form className="quiz-comp-form">
                <label className="quiz-comp-title">mettre la question ici</label>
                <label className="quiz-comp-label-answer">
                    <input type="checkbox" name="myCheckbox" className="checkbox" value=""/>
                    <p className="quiz-comp-form-p">reponse 1</p>
                </label>
                <label className="quiz-comp-label-answer">
                    <input type="checkbox" name="myCheckbox" className="checkbox" value=""/>
                    <p className="quiz-comp-form-p">reponse 1</p>
                </label>
                <label className="quiz-comp-label-answer">
                    <input type="checkbox" name="myCheckbox" className="checkbox" value=""/>
                    <p className="quiz-comp-form-p">reponse 2</p>
                </label>
                <label className="quiz-comp-label-answer">
                    <input type="checkbox" name="myCheckbox" className="checkbox" value=""/>
                    <p className="quiz-comp-form-p">reponse 4</p>
                </label>
                <input type="submit" value="Envoyer" className="quiz-comp-submit"/>
                </form>
            </div>
        </div>
    )
}

export default QuizComponent;