import { useEffect, useState } from "react";
import axios from "axios";
import QuizComponent from "./QuizComponent";
import './quiz.scss';
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Quiz(){

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
        <div className="quiz-wrapper">
            <Header/>
            <h1 className="quiz-title">Découvrez votre animal totem</h1>
            {
                questionsData.map((item, index) => (
                    <QuizComponent key={index} {...item} />
                ))
            }
            <Footer/>
        </div>
    )
}

export default Quiz;