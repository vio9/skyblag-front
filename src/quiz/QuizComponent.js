import { useEffect, useState } from "react";
import axios from "axios";
import "./quiz-component.scss";

function QuizComponent(){
    const [questionsData, setQuestionsData] = useState([]);

     const getQuiz = async () => {
        try{
            const result = await axios.get("https://skyblag-back.onrender.com/api/getAllQuiz");
            setQuestionsData(result.data)
            console.log(result.data)
       
        } 
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getQuiz()
    }, [])


    return(
        <div className="wrapper-quiz-comp">
            <div className="quiz-comp-wrapper">
                <form className="quiz-comp-form">{
                    questionsData.map(item => (
                        <label className="quiz-comp-title">{}</label>
                    ))
                }
                <label className="quiz-comp-title">mettre la question ici</label>
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
                    <p className="quiz-comp-form-p">reponse 3</p>
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