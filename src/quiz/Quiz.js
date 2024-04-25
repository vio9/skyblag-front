import { useEffect, useState } from "react";
import axios from "axios";
import QuizComponent from "./QuizComponent";
import './quiz.scss';
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Quiz(){

    const [questionsData, setQuestionsData] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [selectedAnswersArray, setSelectedAnswersArray] = useState([]);

    let dataNumber;

    const getQuiz = async () => {
       try{
           const result = await axios.get("https://skyblag-back.onrender.com/api/getAllQuiz");
           setQuestionsData(result.data)
           console.log(result.data)
           dataNumber = result.data.length;
       } 
       catch(error){
           console.log(error)
       }
   }

   useEffect(() => {
       getQuiz()
   }, [])

   const handleAnswerChange = (id, answerScore) => {
    setSelectedAnswers(prevSelectedAnswers => ({
       ...prevSelectedAnswers,
      [id]: answerScore
    }));
    setSelectedAnswersArray(prevSelectedAnswersArray => {
        const updatedSelectedAnswersArray = [...prevSelectedAnswersArray];
        updatedSelectedAnswersArray.push(answerScore);
        return updatedSelectedAnswersArray;
    });
   }
   let numberArray;

   const onSubmit = () => {
    console.log('tableau:',selectedAnswersArray)
    numberArray = selectedAnswersArray.map(Number).reduce((total, current) => total +current, 0);
    console.log(numberArray)
    AnimalTotem();
   }    

   function AnimalTotem(){
    if(numberArray <=5){
        alert('ton animal totem est la loutre')

    } else if(numberArray >5 && numberArray <=10){
        alert("ton anumal totem est la chouette")
    } else if(numberArray > 10 && numberArray <=15){
       alert("ton animal totem est la poubelle")
    } else if(numberArray > 15 && numberArray <=20){
        alert("ton animal totem est le rat dégueu et pas le rat d'égoût")
    }
   } 


    return(
        <div className="quiz-wrapper">
            <Header/>
            <h1 className="quiz-title">Découvrez votre animal totem</h1>
            {
                questionsData.map((item, index) => (
                    <QuizComponent key={index} 
                        {...item} 
                        index={index}
                        onAnswerChange={handleAnswerChange}
                    />
                ))
            }
            <button onClick={onSubmit}>envoyer</button>
            <Footer/>
        </div>
    )
}

export default Quiz;